# `dataOciDelegateAccessControlDelegationControlResources` Submodule <a name="`dataOciDelegateAccessControlDelegationControlResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegationControlResources <a name="DataOciDelegateAccessControlDelegationControlResources" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources oci_delegate_access_control_delegation_control_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResources(Construct Scope, string Id, DataOciDelegateAccessControlDelegationControlResourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig">DataOciDelegateAccessControlDelegationControlResourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig">DataOciDelegateAccessControlDelegationControlResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationControlResources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDelegateAccessControlDelegationControlResources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDelegateAccessControlDelegationControlResources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDelegateAccessControlDelegationControlResources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDelegateAccessControlDelegationControlResources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationControlResources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDelegateAccessControlDelegationControlResources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDelegateAccessControlDelegationControlResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegationControlResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.delegationControlResourceCollection">DelegationControlResourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList">DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList">DataOciDelegateAccessControlDelegationControlResourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.delegationControlIdInput">DelegationControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.delegationControlId">DelegationControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DelegationControlResourceCollection`<sup>Required</sup> <a name="DelegationControlResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.delegationControlResourceCollection"></a>

```csharp
public DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList DelegationControlResourceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList">DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.filter"></a>

```csharp
public DataOciDelegateAccessControlDelegationControlResourcesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList">DataOciDelegateAccessControlDelegationControlResourcesFilterList</a>

---

##### `DelegationControlIdInput`<sup>Optional</sup> <a name="DelegationControlIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.delegationControlIdInput"></a>

```csharp
public string DelegationControlIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DelegationControlId`<sup>Required</sup> <a name="DelegationControlId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.delegationControlId"></a>

```csharp
public string DelegationControlId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegationControlResourcesConfig <a name="DataOciDelegateAccessControlDelegationControlResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DelegationControlId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.delegationControlId">DelegationControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#delegation_control_id DataOciDelegateAccessControlDelegationControlResources#delegation_control_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#id DataOciDelegateAccessControlDelegationControlResources#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DelegationControlId`<sup>Required</sup> <a name="DelegationControlId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.delegationControlId"></a>

```csharp
public string DelegationControlId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#delegation_control_id DataOciDelegateAccessControlDelegationControlResources#delegation_control_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#filter DataOciDelegateAccessControlDelegationControlResources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#id DataOciDelegateAccessControlDelegationControlResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection <a name="DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection {

};
```


### DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems <a name="DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems {

};
```


### DataOciDelegateAccessControlDelegationControlResourcesFilter <a name="DataOciDelegateAccessControlDelegationControlResourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#name DataOciDelegateAccessControlDelegationControlResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#values DataOciDelegateAccessControlDelegationControlResources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#regex DataOciDelegateAccessControlDelegationControlResources#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#name DataOciDelegateAccessControlDelegationControlResources#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#values DataOciDelegateAccessControlDelegationControlResources#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control_resources#regex DataOciDelegateAccessControlDelegationControlResources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList <a name="DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.get"></a>

```csharp
private DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference <a name="DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.resourceStatus">ResourceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems">DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceStatus`<sup>Required</sup> <a name="ResourceStatus" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.resourceStatus"></a>

```csharp
public string ResourceStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems">DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItems</a>

---


### DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList <a name="DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.get"></a>

```csharp
private DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference <a name="DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList">DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection">DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.property.items"></a>

```csharp
public DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList">DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection">DataOciDelegateAccessControlDelegationControlResourcesDelegationControlResourceCollection</a>

---


### DataOciDelegateAccessControlDelegationControlResourcesFilterList <a name="DataOciDelegateAccessControlDelegationControlResourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.get"></a>

```csharp
private DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference <a name="DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControlResources.DataOciDelegateAccessControlDelegationControlResourcesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



