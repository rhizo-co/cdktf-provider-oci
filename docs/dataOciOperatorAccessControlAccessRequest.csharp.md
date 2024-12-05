# `dataOciOperatorAccessControlAccessRequest` Submodule <a name="`dataOciOperatorAccessControlAccessRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequest <a name="DataOciOperatorAccessControlAccessRequest" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request oci_operator_access_control_access_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequest(Construct Scope, string Id, DataOciOperatorAccessControlAccessRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig">DataOciOperatorAccessControlAccessRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig">DataOciOperatorAccessControlAccessRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequest.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlAccessRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessReasonSummary">AccessReasonSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.actionRequestsList">ActionRequestsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverComment">ApproverComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverDetails">ApproverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList">DataOciOperatorAccessControlAccessRequestApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.auditType">AuditType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.closureComment">ClosureComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extendDuration">ExtendDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extensionApproverDetails">ExtensionApproverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isAutoApproved">IsAutoApproved</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isValidateAssignment">IsValidateAssignment</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApprovers">NumberOfApprovers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApproversRequired">NumberOfApproversRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfExtensionApprovers">NumberOfExtensionApprovers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlAdditionalMessage">OpctlAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlId">OpctlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlName">OpctlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.operatorId">OperatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.requestId">RequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.subResourceList">SubResourceList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.systemMessage">SystemMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfCreation">TimeOfCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfModification">TimeOfModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfUserCreation">TimeOfUserCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeRequestedForFutureAccess">TimeRequestedForFutureAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.workflowId">WorkflowId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestIdInput">AccessRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestId">AccessRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessReasonSummary`<sup>Required</sup> <a name="AccessReasonSummary" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessReasonSummary"></a>

```csharp
public string AccessReasonSummary { get; }
```

- *Type:* string

---

##### `ActionRequestsList`<sup>Required</sup> <a name="ActionRequestsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.actionRequestsList"></a>

```csharp
public string[] ActionRequestsList { get; }
```

- *Type:* string[]

---

##### `ApproverComment`<sup>Required</sup> <a name="ApproverComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverComment"></a>

```csharp
public string ApproverComment { get; }
```

- *Type:* string

---

##### `ApproverDetails`<sup>Required</sup> <a name="ApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverDetails"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestApproverDetailsList ApproverDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList">DataOciOperatorAccessControlAccessRequestApproverDetailsList</a>

---

##### `AuditType`<sup>Required</sup> <a name="AuditType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.auditType"></a>

```csharp
public string[] AuditType { get; }
```

- *Type:* string[]

---

##### `ClosureComment`<sup>Required</sup> <a name="ClosureComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.closureComment"></a>

```csharp
public string ClosureComment { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `ExtendDuration`<sup>Required</sup> <a name="ExtendDuration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extendDuration"></a>

```csharp
public double ExtendDuration { get; }
```

- *Type:* double

---

##### `ExtensionApproverDetails`<sup>Required</sup> <a name="ExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extensionApproverDetails"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList ExtensionApproverDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsAutoApproved`<sup>Required</sup> <a name="IsAutoApproved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isAutoApproved"></a>

```csharp
public IResolvable IsAutoApproved { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsValidateAssignment`<sup>Required</sup> <a name="IsValidateAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isValidateAssignment"></a>

```csharp
public IResolvable IsValidateAssignment { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NumberOfApprovers`<sup>Required</sup> <a name="NumberOfApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApprovers"></a>

```csharp
public double NumberOfApprovers { get; }
```

- *Type:* double

---

##### `NumberOfApproversRequired`<sup>Required</sup> <a name="NumberOfApproversRequired" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApproversRequired"></a>

```csharp
public double NumberOfApproversRequired { get; }
```

- *Type:* double

---

##### `NumberOfExtensionApprovers`<sup>Required</sup> <a name="NumberOfExtensionApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfExtensionApprovers"></a>

```csharp
public double NumberOfExtensionApprovers { get; }
```

- *Type:* double

---

##### `OpctlAdditionalMessage`<sup>Required</sup> <a name="OpctlAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlAdditionalMessage"></a>

```csharp
public string OpctlAdditionalMessage { get; }
```

- *Type:* string

---

##### `OpctlId`<sup>Required</sup> <a name="OpctlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlId"></a>

```csharp
public string OpctlId { get; }
```

- *Type:* string

---

##### `OpctlName`<sup>Required</sup> <a name="OpctlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlName"></a>

```csharp
public string OpctlName { get; }
```

- *Type:* string

---

##### `OperatorId`<sup>Required</sup> <a name="OperatorId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.operatorId"></a>

```csharp
public string OperatorId { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.requestId"></a>

```csharp
public string RequestId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubResourceList`<sup>Required</sup> <a name="SubResourceList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.subResourceList"></a>

```csharp
public string[] SubResourceList { get; }
```

- *Type:* string[]

---

##### `SystemMessage`<sup>Required</sup> <a name="SystemMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.systemMessage"></a>

```csharp
public string SystemMessage { get; }
```

- *Type:* string

---

##### `TimeOfCreation`<sup>Required</sup> <a name="TimeOfCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfCreation"></a>

```csharp
public string TimeOfCreation { get; }
```

- *Type:* string

---

##### `TimeOfModification`<sup>Required</sup> <a name="TimeOfModification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfModification"></a>

```csharp
public string TimeOfModification { get; }
```

- *Type:* string

---

##### `TimeOfUserCreation`<sup>Required</sup> <a name="TimeOfUserCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfUserCreation"></a>

```csharp
public string TimeOfUserCreation { get; }
```

- *Type:* string

---

##### `TimeRequestedForFutureAccess`<sup>Required</sup> <a name="TimeRequestedForFutureAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeRequestedForFutureAccess"></a>

```csharp
public string TimeRequestedForFutureAccess { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.workflowId"></a>

```csharp
public string[] WorkflowId { get; }
```

- *Type:* string[]

---

##### `AccessRequestIdInput`<sup>Optional</sup> <a name="AccessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestIdInput"></a>

```csharp
public string AccessRequestIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AccessRequestId`<sup>Required</sup> <a name="AccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestId"></a>

```csharp
public string AccessRequestId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestApproverDetails <a name="DataOciOperatorAccessControlAccessRequestApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestApproverDetails {

};
```


### DataOciOperatorAccessControlAccessRequestConfig <a name="DataOciOperatorAccessControlAccessRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessRequestId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.accessRequestId">AccessRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#access_request_id DataOciOperatorAccessControlAccessRequest#access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#id DataOciOperatorAccessControlAccessRequest#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessRequestId`<sup>Required</sup> <a name="AccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.accessRequestId"></a>

```csharp
public string AccessRequestId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#access_request_id DataOciOperatorAccessControlAccessRequest#access_request_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#id DataOciOperatorAccessControlAccessRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOperatorAccessControlAccessRequestExtensionApproverDetails <a name="DataOciOperatorAccessControlAccessRequestExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestExtensionApproverDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlAccessRequestApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestApproverDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.get"></a>

```csharp
private DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAction">ApprovalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAdditionalMessage">ApprovalAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalComment">ApprovalComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approverId">ApproverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeApprovedForAccess">TimeApprovedForAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeOfAuthorization">TimeOfAuthorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails">DataOciOperatorAccessControlAccessRequestApproverDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalAction`<sup>Required</sup> <a name="ApprovalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAction"></a>

```csharp
public string ApprovalAction { get; }
```

- *Type:* string

---

##### `ApprovalAdditionalMessage`<sup>Required</sup> <a name="ApprovalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```csharp
public string ApprovalAdditionalMessage { get; }
```

- *Type:* string

---

##### `ApprovalComment`<sup>Required</sup> <a name="ApprovalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalComment"></a>

```csharp
public string ApprovalComment { get; }
```

- *Type:* string

---

##### `ApproverId`<sup>Required</sup> <a name="ApproverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approverId"></a>

```csharp
public string ApproverId { get; }
```

- *Type:* string

---

##### `TimeApprovedForAccess`<sup>Required</sup> <a name="TimeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```csharp
public string TimeApprovedForAccess { get; }
```

- *Type:* string

---

##### `TimeOfAuthorization`<sup>Required</sup> <a name="TimeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```csharp
public string TimeOfAuthorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestApproverDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails">DataOciOperatorAccessControlAccessRequestApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.get"></a>

```csharp
private DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAction">ApprovalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage">ApprovalAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalComment">ApprovalComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approverId">ApproverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeApprovedForAccess">TimeApprovedForAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeOfAuthorization">TimeOfAuthorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestExtensionApproverDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalAction`<sup>Required</sup> <a name="ApprovalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAction"></a>

```csharp
public string ApprovalAction { get; }
```

- *Type:* string

---

##### `ApprovalAdditionalMessage`<sup>Required</sup> <a name="ApprovalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```csharp
public string ApprovalAdditionalMessage { get; }
```

- *Type:* string

---

##### `ApprovalComment`<sup>Required</sup> <a name="ApprovalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalComment"></a>

```csharp
public string ApprovalComment { get; }
```

- *Type:* string

---

##### `ApproverId`<sup>Required</sup> <a name="ApproverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approverId"></a>

```csharp
public string ApproverId { get; }
```

- *Type:* string

---

##### `TimeApprovedForAccess`<sup>Required</sup> <a name="TimeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```csharp
public string TimeApprovedForAccess { get; }
```

- *Type:* string

---

##### `TimeOfAuthorization`<sup>Required</sup> <a name="TimeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```csharp
public string TimeOfAuthorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestExtensionApproverDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestExtensionApproverDetails</a>

---



