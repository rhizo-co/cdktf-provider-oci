# `dataOciOperatorAccessControlAccessRequests` Submodule <a name="`dataOciOperatorAccessControlAccessRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequests <a name="DataOciOperatorAccessControlAccessRequests" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests oci_operator_access_control_access_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequests(Construct Scope, string Id, DataOciOperatorAccessControlAccessRequestsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig">DataOciOperatorAccessControlAccessRequestsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig">DataOciOperatorAccessControlAccessRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceName` <a name="ResetResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceName"></a>

```csharp
private void ResetResourceName()
```

##### `ResetResourceType` <a name="ResetResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeEnd"></a>

```csharp
private void ResetTimeEnd()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeStart"></a>

```csharp
private void ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequests.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequests.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequests.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlAccessRequests.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequests resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequests to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlAccessRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.accessRequestCollection">AccessRequestCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList">DataOciOperatorAccessControlAccessRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEndInput">TimeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStartInput">TimeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessRequestCollection`<sup>Required</sup> <a name="AccessRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.accessRequestCollection"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList AccessRequestCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filter"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList">DataOciOperatorAccessControlAccessRequestsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEndInput"></a>

```csharp
public string TimeEndInput { get; }
```

- *Type:* string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStartInput"></a>

```csharp
public string TimeStartInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestsAccessRequestCollection <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollection {

};
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems {

};
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails {

};
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails {

};
```


### DataOciOperatorAccessControlAccessRequestsConfig <a name="DataOciOperatorAccessControlAccessRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null,
    string ResourceName = null,
    string ResourceType = null,
    string State = null,
    string TimeEnd = null,
    string TimeStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceName">ResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeEnd">TimeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeStart">TimeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#filter DataOciOperatorAccessControlAccessRequests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeEnd"></a>

```csharp
public string TimeEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeStart"></a>

```csharp
public string TimeStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}.

---

### DataOciOperatorAccessControlAccessRequestsFilter <a name="DataOciOperatorAccessControlAccessRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#name DataOciOperatorAccessControlAccessRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#values DataOciOperatorAccessControlAccessRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#regex DataOciOperatorAccessControlAccessRequests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#name DataOciOperatorAccessControlAccessRequests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#values DataOciOperatorAccessControlAccessRequests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#regex DataOciOperatorAccessControlAccessRequests#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get"></a>

```csharp
private DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAction">ApprovalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAdditionalMessage">ApprovalAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalComment">ApprovalComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approverId">ApproverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeApprovedForAccess">TimeApprovedForAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeOfAuthorization">TimeOfAuthorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalAction`<sup>Required</sup> <a name="ApprovalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAction"></a>

```csharp
public string ApprovalAction { get; }
```

- *Type:* string

---

##### `ApprovalAdditionalMessage`<sup>Required</sup> <a name="ApprovalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```csharp
public string ApprovalAdditionalMessage { get; }
```

- *Type:* string

---

##### `ApprovalComment`<sup>Required</sup> <a name="ApprovalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalComment"></a>

```csharp
public string ApprovalComment { get; }
```

- *Type:* string

---

##### `ApproverId`<sup>Required</sup> <a name="ApproverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approverId"></a>

```csharp
public string ApproverId { get; }
```

- *Type:* string

---

##### `TimeApprovedForAccess`<sup>Required</sup> <a name="TimeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```csharp
public string TimeApprovedForAccess { get; }
```

- *Type:* string

---

##### `TimeOfAuthorization`<sup>Required</sup> <a name="TimeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```csharp
public string TimeOfAuthorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get"></a>

```csharp
private DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAction">ApprovalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage">ApprovalAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalComment">ApprovalComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approverId">ApproverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeApprovedForAccess">TimeApprovedForAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeOfAuthorization">TimeOfAuthorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalAction`<sup>Required</sup> <a name="ApprovalAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAction"></a>

```csharp
public string ApprovalAction { get; }
```

- *Type:* string

---

##### `ApprovalAdditionalMessage`<sup>Required</sup> <a name="ApprovalAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```csharp
public string ApprovalAdditionalMessage { get; }
```

- *Type:* string

---

##### `ApprovalComment`<sup>Required</sup> <a name="ApprovalComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalComment"></a>

```csharp
public string ApprovalComment { get; }
```

- *Type:* string

---

##### `ApproverId`<sup>Required</sup> <a name="ApproverId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approverId"></a>

```csharp
public string ApproverId { get; }
```

- *Type:* string

---

##### `TimeApprovedForAccess`<sup>Required</sup> <a name="TimeApprovedForAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```csharp
public string TimeApprovedForAccess { get; }
```

- *Type:* string

---

##### `TimeOfAuthorization`<sup>Required</sup> <a name="TimeOfAuthorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```csharp
public string TimeOfAuthorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get"></a>

```csharp
private DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.accessReasonSummary">AccessReasonSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.actionRequestsList">ActionRequestsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverComment">ApproverComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverDetails">ApproverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.auditType">AuditType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.closureComment">ClosureComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extendDuration">ExtendDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extensionApproverDetails">ExtensionApproverDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isAutoApproved">IsAutoApproved</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isValidateAssignment">IsValidateAssignment</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApprovers">NumberOfApprovers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApproversRequired">NumberOfApproversRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfExtensionApprovers">NumberOfExtensionApprovers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlAdditionalMessage">OpctlAdditionalMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlId">OpctlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlName">OpctlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.operatorId">OperatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.requestId">RequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.subResourceList">SubResourceList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.systemMessage">SystemMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfCreation">TimeOfCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfModification">TimeOfModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfUserCreation">TimeOfUserCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeRequestedForFutureAccess">TimeRequestedForFutureAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.workflowId">WorkflowId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessReasonSummary`<sup>Required</sup> <a name="AccessReasonSummary" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.accessReasonSummary"></a>

```csharp
public string AccessReasonSummary { get; }
```

- *Type:* string

---

##### `ActionRequestsList`<sup>Required</sup> <a name="ActionRequestsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.actionRequestsList"></a>

```csharp
public string[] ActionRequestsList { get; }
```

- *Type:* string[]

---

##### `ApproverComment`<sup>Required</sup> <a name="ApproverComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverComment"></a>

```csharp
public string ApproverComment { get; }
```

- *Type:* string

---

##### `ApproverDetails`<sup>Required</sup> <a name="ApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverDetails"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList ApproverDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList</a>

---

##### `AuditType`<sup>Required</sup> <a name="AuditType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.auditType"></a>

```csharp
public string[] AuditType { get; }
```

- *Type:* string[]

---

##### `ClosureComment`<sup>Required</sup> <a name="ClosureComment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.closureComment"></a>

```csharp
public string ClosureComment { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `ExtendDuration`<sup>Required</sup> <a name="ExtendDuration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extendDuration"></a>

```csharp
public double ExtendDuration { get; }
```

- *Type:* double

---

##### `ExtensionApproverDetails`<sup>Required</sup> <a name="ExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extensionApproverDetails"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList ExtensionApproverDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutoApproved`<sup>Required</sup> <a name="IsAutoApproved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isAutoApproved"></a>

```csharp
public IResolvable IsAutoApproved { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsValidateAssignment`<sup>Required</sup> <a name="IsValidateAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isValidateAssignment"></a>

```csharp
public IResolvable IsValidateAssignment { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `NumberOfApprovers`<sup>Required</sup> <a name="NumberOfApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApprovers"></a>

```csharp
public double NumberOfApprovers { get; }
```

- *Type:* double

---

##### `NumberOfApproversRequired`<sup>Required</sup> <a name="NumberOfApproversRequired" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApproversRequired"></a>

```csharp
public double NumberOfApproversRequired { get; }
```

- *Type:* double

---

##### `NumberOfExtensionApprovers`<sup>Required</sup> <a name="NumberOfExtensionApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfExtensionApprovers"></a>

```csharp
public double NumberOfExtensionApprovers { get; }
```

- *Type:* double

---

##### `OpctlAdditionalMessage`<sup>Required</sup> <a name="OpctlAdditionalMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlAdditionalMessage"></a>

```csharp
public string OpctlAdditionalMessage { get; }
```

- *Type:* string

---

##### `OpctlId`<sup>Required</sup> <a name="OpctlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlId"></a>

```csharp
public string OpctlId { get; }
```

- *Type:* string

---

##### `OpctlName`<sup>Required</sup> <a name="OpctlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlName"></a>

```csharp
public string OpctlName { get; }
```

- *Type:* string

---

##### `OperatorId`<sup>Required</sup> <a name="OperatorId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.operatorId"></a>

```csharp
public string OperatorId { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `RequestId`<sup>Required</sup> <a name="RequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.requestId"></a>

```csharp
public string RequestId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubResourceList`<sup>Required</sup> <a name="SubResourceList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.subResourceList"></a>

```csharp
public string[] SubResourceList { get; }
```

- *Type:* string[]

---

##### `SystemMessage`<sup>Required</sup> <a name="SystemMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.systemMessage"></a>

```csharp
public string SystemMessage { get; }
```

- *Type:* string

---

##### `TimeOfCreation`<sup>Required</sup> <a name="TimeOfCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfCreation"></a>

```csharp
public string TimeOfCreation { get; }
```

- *Type:* string

---

##### `TimeOfModification`<sup>Required</sup> <a name="TimeOfModification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfModification"></a>

```csharp
public string TimeOfModification { get; }
```

- *Type:* string

---

##### `TimeOfUserCreation`<sup>Required</sup> <a name="TimeOfUserCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfUserCreation"></a>

```csharp
public string TimeOfUserCreation { get; }
```

- *Type:* string

---

##### `TimeRequestedForFutureAccess`<sup>Required</sup> <a name="TimeRequestedForFutureAccess" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeRequestedForFutureAccess"></a>

```csharp
public string TimeRequestedForFutureAccess { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.workflowId"></a>

```csharp
public string[] WorkflowId { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get"></a>

```csharp
private DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection">DataOciOperatorAccessControlAccessRequestsAccessRequestCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.items"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOperatorAccessControlAccessRequestsAccessRequestCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection">DataOciOperatorAccessControlAccessRequestsAccessRequestCollection</a>

---


### DataOciOperatorAccessControlAccessRequestsFilterList <a name="DataOciOperatorAccessControlAccessRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get"></a>

```csharp
private DataOciOperatorAccessControlAccessRequestsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOperatorAccessControlAccessRequestsFilterOutputReference <a name="DataOciOperatorAccessControlAccessRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlAccessRequestsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



