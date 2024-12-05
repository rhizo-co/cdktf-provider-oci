# `dataOciIdentityDomainsApprovalWorkflowAssignment` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowAssignment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignment <a name="DataOciIdentityDomainsApprovalWorkflowAssignment" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment oci_identity_domains_approval_workflow_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignment(Construct Scope, string Id, DataOciIdentityDomainsApprovalWorkflowAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig">DataOciIdentityDomainsApprovalWorkflowAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig">DataOciIdentityDomainsApprovalWorkflowAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowAssignment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsApprovalWorkflowAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsApprovalWorkflowAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.assignedTo">AssignedTo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.assignmentType">AssignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowAssignmentIdInput">ApprovalWorkflowAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowAssignmentId">ApprovalWorkflowAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApprovalWorkflow`<sup>Required</sup> <a name="ApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflow"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList ApprovalWorkflow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList</a>

---

##### `AssignedTo`<sup>Required</sup> <a name="AssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.assignedTo"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList AssignedTo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList</a>

---

##### `AssignmentType`<sup>Required</sup> <a name="AssignmentType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.assignmentType"></a>

```csharp
public string AssignmentType { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.meta"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tags"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `ApprovalWorkflowAssignmentIdInput`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowAssignmentIdInput"></a>

```csharp
public string ApprovalWorkflowAssignmentIdInput { get; }
```

- *Type:* string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `ApprovalWorkflowAssignmentId`<sup>Required</sup> <a name="ApprovalWorkflowAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowAssignmentId"></a>

```csharp
public string ApprovalWorkflowAssignmentId { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentConfig <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApprovalWorkflowAssignmentId,
    string IdcsEndpoint,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string ResourceTypeSchemaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.approvalWorkflowAssignmentId">ApprovalWorkflowAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#approval_workflow_assignment_id DataOciIdentityDomainsApprovalWorkflowAssignment#approval_workflow_assignment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignment#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#attributes DataOciIdentityDomainsApprovalWorkflowAssignment#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignment#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#authorization DataOciIdentityDomainsApprovalWorkflowAssignment#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignment#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApprovalWorkflowAssignmentId`<sup>Required</sup> <a name="ApprovalWorkflowAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.approvalWorkflowAssignmentId"></a>

```csharp
public string ApprovalWorkflowAssignmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#approval_workflow_assignment_id DataOciIdentityDomainsApprovalWorkflowAssignment#approval_workflow_assignment_id}.

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignment#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#attributes DataOciIdentityDomainsApprovalWorkflowAssignment#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignment#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#authorization DataOciIdentityDomainsApprovalWorkflowAssignment#authorization}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignment#resource_type_schema_version}.

---

### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentMeta <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentMeta {

};
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentTags <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.get"></a>

```csharp
private DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTags">DataOciIdentityDomainsApprovalWorkflowAssignmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsApprovalWorkflowAssignmentTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTags">DataOciIdentityDomainsApprovalWorkflowAssignmentTags</a>

---



