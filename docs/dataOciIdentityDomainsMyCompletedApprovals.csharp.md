# `dataOciIdentityDomainsMyCompletedApprovals` Submodule <a name="`dataOciIdentityDomainsMyCompletedApprovals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyCompletedApprovals <a name="DataOciIdentityDomainsMyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals oci_identity_domains_my_completed_approvals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovals(Construct Scope, string Id, DataOciIdentityDomainsMyCompletedApprovalsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig">DataOciIdentityDomainsMyCompletedApprovalsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig">DataOciIdentityDomainsMyCompletedApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalCount">ResetMyCompletedApprovalCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalFilter">ResetMyCompletedApprovalFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMyCompletedApprovalCount` <a name="ResetMyCompletedApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalCount"></a>

```csharp
private void ResetMyCompletedApprovalCount()
```

##### `ResetMyCompletedApprovalFilter` <a name="ResetMyCompletedApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalFilter"></a>

```csharp
private void ResetMyCompletedApprovalFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyCompletedApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyCompletedApprovals.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyCompletedApprovals.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyCompletedApprovals.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsMyCompletedApprovals.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyCompletedApprovals resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyCompletedApprovals to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyCompletedApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyCompletedApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovals">MyCompletedApprovals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCountInput">MyCompletedApprovalCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilterInput">MyCompletedApprovalFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortByInput">SortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCount">MyCompletedApprovalCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilter">MyCompletedApprovalFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `MyCompletedApprovals`<sup>Required</sup> <a name="MyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovals"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList MyCompletedApprovals { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MyCompletedApprovalCountInput`<sup>Optional</sup> <a name="MyCompletedApprovalCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCountInput"></a>

```csharp
public double MyCompletedApprovalCountInput { get; }
```

- *Type:* double

---

##### `MyCompletedApprovalFilterInput`<sup>Optional</sup> <a name="MyCompletedApprovalFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilterInput"></a>

```csharp
public string MyCompletedApprovalFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortByInput"></a>

```csharp
public string SortByInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `MyCompletedApprovalCount`<sup>Required</sup> <a name="MyCompletedApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCount"></a>

```csharp
public double MyCompletedApprovalCount { get; }
```

- *Type:* double

---

##### `MyCompletedApprovalFilter`<sup>Required</sup> <a name="MyCompletedApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilter"></a>

```csharp
public string MyCompletedApprovalFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyCompletedApprovalsConfig <a name="DataOciIdentityDomainsMyCompletedApprovalsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string Authorization = null,
    string CompartmentId = null,
    string Id = null,
    double MyCompletedApprovalCount = null,
    string MyCompletedApprovalFilter = null,
    string ResourceTypeSchemaVersion = null,
    string SortBy = null,
    string SortOrder = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalCount">MyCompletedApprovalCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalFilter">MyCompletedApprovalFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortBy">SortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MyCompletedApprovalCount`<sup>Optional</sup> <a name="MyCompletedApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalCount"></a>

```csharp
public double MyCompletedApprovalCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}.

---

##### `MyCompletedApprovalFilter`<sup>Optional</sup> <a name="MyCompletedApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalFilter"></a>

```csharp
public string MyCompletedApprovalFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortBy"></a>

```csharp
public string SortBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}.

---

### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals {

};
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy {

};
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta {

};
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get"></a>

```csharp
private DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get"></a>

```csharp
private DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.expires">Expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.justification">Justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.myCompletedApprovalId">MyCompletedApprovalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestCreatedTime">RequestCreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestDetails">RequestDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestId">RequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestOcid">RequestOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceDisplayName">ResourceDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.responseTime">ResponseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.expires"></a>

```csharp
public string Expires { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.justification"></a>

```csharp
public string Justification { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList</a>

---

##### `MyCompletedApprovalId`<sup>Required</sup> <a name="MyCompletedApprovalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.myCompletedApprovalId"></a>

```csharp
public string MyCompletedApprovalId { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `RequestCreatedTime`<sup>Required</sup> <a name="RequestCreatedTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestCreatedTime"></a>

```csharp
public string RequestCreatedTime { get; }
```

- *Type:* string

---

##### `RequestDetails`<sup>Required</sup> <a name="RequestDetails" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestDetails"></a>

```csharp
public string RequestDetails { get; }
```

- *Type:* string

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestId"></a>

```csharp
public string RequestId { get; }
```

- *Type:* string

---

##### `RequestOcid`<sup>Required</sup> <a name="RequestOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestOcid"></a>

```csharp
public string RequestOcid { get; }
```

- *Type:* string

---

##### `ResourceDisplayName`<sup>Required</sup> <a name="ResourceDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceDisplayName"></a>

```csharp
public string ResourceDisplayName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `ResponseTime`<sup>Required</sup> <a name="ResponseTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.responseTime"></a>

```csharp
public string ResponseTime { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tags"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get"></a>

```csharp
private DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags</a>

---



