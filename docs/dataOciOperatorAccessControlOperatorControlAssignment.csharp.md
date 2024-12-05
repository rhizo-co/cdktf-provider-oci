# `dataOciOperatorAccessControlOperatorControlAssignment` Submodule <a name="`dataOciOperatorAccessControlOperatorControlAssignment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorControlAssignment <a name="DataOciOperatorAccessControlOperatorControlAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorControlAssignment(Construct Scope, string Id, DataOciOperatorAccessControlOperatorControlAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig">DataOciOperatorAccessControlOperatorControlAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig">DataOciOperatorAccessControlOperatorControlAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlOperatorControlAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlOperatorControlAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlOperatorControlAssignment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlOperatorControlAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControlAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlOperatorControlAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControlAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.assignerId">AssignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.detachmentDescription">DetachmentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorCode">ErrorCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment">IsDefaultAssignment</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways">IsEnforcedAlways</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded">IsHypervisorLogForwarded</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isLogForwarded">IsLogForwarded</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.opControlName">OpControlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlId">OperatorControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress">RemoteSyslogServerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert">RemoteSyslogServerCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort">RemoteSyslogServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom">TimeAssignmentFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo">TimeAssignmentTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfAssignment">TimeOfAssignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.unassignerId">UnassignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger">ValidateAssignmentTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentIdInput">OperatorControlAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentId">OperatorControlAssignmentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AssignerId`<sup>Required</sup> <a name="AssignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.assignerId"></a>

```csharp
public string AssignerId { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DetachmentDescription`<sup>Required</sup> <a name="DetachmentDescription" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.detachmentDescription"></a>

```csharp
public string DetachmentDescription { get; }
```

- *Type:* string

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorCode"></a>

```csharp
public double ErrorCode { get; }
```

- *Type:* double

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutoApproveDuringMaintenance`<sup>Required</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance"></a>

```csharp
public IResolvable IsAutoApproveDuringMaintenance { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDefaultAssignment`<sup>Required</sup> <a name="IsDefaultAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment"></a>

```csharp
public IResolvable IsDefaultAssignment { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnforcedAlways`<sup>Required</sup> <a name="IsEnforcedAlways" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways"></a>

```csharp
public IResolvable IsEnforcedAlways { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHypervisorLogForwarded`<sup>Required</sup> <a name="IsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded"></a>

```csharp
public IResolvable IsHypervisorLogForwarded { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsLogForwarded`<sup>Required</sup> <a name="IsLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isLogForwarded"></a>

```csharp
public IResolvable IsLogForwarded { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OpControlName`<sup>Required</sup> <a name="OpControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.opControlName"></a>

```csharp
public string OpControlName { get; }
```

- *Type:* string

---

##### `OperatorControlId`<sup>Required</sup> <a name="OperatorControlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlId"></a>

```csharp
public string OperatorControlId { get; }
```

- *Type:* string

---

##### `RemoteSyslogServerAddress`<sup>Required</sup> <a name="RemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress"></a>

```csharp
public string RemoteSyslogServerAddress { get; }
```

- *Type:* string

---

##### `RemoteSyslogServerCaCert`<sup>Required</sup> <a name="RemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert"></a>

```csharp
public string RemoteSyslogServerCaCert { get; }
```

- *Type:* string

---

##### `RemoteSyslogServerPort`<sup>Required</sup> <a name="RemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort"></a>

```csharp
public double RemoteSyslogServerPort { get; }
```

- *Type:* double

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId"></a>

```csharp
public string ResourceCompartmentId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeAssignmentFrom`<sup>Required</sup> <a name="TimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom"></a>

```csharp
public string TimeAssignmentFrom { get; }
```

- *Type:* string

---

##### `TimeAssignmentTo`<sup>Required</sup> <a name="TimeAssignmentTo" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo"></a>

```csharp
public string TimeAssignmentTo { get; }
```

- *Type:* string

---

##### `TimeOfAssignment`<sup>Required</sup> <a name="TimeOfAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfAssignment"></a>

```csharp
public string TimeOfAssignment { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `UnassignerId`<sup>Required</sup> <a name="UnassignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.unassignerId"></a>

```csharp
public string UnassignerId { get; }
```

- *Type:* string

---

##### `ValidateAssignmentTrigger`<sup>Required</sup> <a name="ValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger"></a>

```csharp
public double ValidateAssignmentTrigger { get; }
```

- *Type:* double

---

##### `OperatorControlAssignmentIdInput`<sup>Optional</sup> <a name="OperatorControlAssignmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentIdInput"></a>

```csharp
public string OperatorControlAssignmentIdInput { get; }
```

- *Type:* string

---

##### `OperatorControlAssignmentId`<sup>Required</sup> <a name="OperatorControlAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentId"></a>

```csharp
public string OperatorControlAssignmentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorControlAssignmentConfig <a name="DataOciOperatorAccessControlOperatorControlAssignmentConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorControlAssignmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OperatorControlAssignmentId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlAssignmentId">OperatorControlAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment#operator_control_assignment_id DataOciOperatorAccessControlOperatorControlAssignment#operator_control_assignment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OperatorControlAssignmentId`<sup>Required</sup> <a name="OperatorControlAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlAssignmentId"></a>

```csharp
public string OperatorControlAssignmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment#operator_control_assignment_id DataOciOperatorAccessControlOperatorControlAssignment#operator_control_assignment_id}.

---



