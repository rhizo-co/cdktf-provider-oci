# `dataOciDelegateAccessControlDelegationControl` Submodule <a name="`dataOciDelegateAccessControlDelegationControl` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegationControl <a name="DataOciDelegateAccessControlDelegationControl" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControl(Construct Scope, string Id, DataOciDelegateAccessControlDelegationControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig">DataOciDelegateAccessControlDelegationControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig">DataOciDelegateAccessControlDelegationControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDelegateAccessControlDelegationControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDelegateAccessControlDelegationControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDelegateAccessControlDelegationControl.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDelegateAccessControlDelegationControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDelegateAccessControlDelegationControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDelegateAccessControlDelegationControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegationControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationSubscriptionIds">DelegationSubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.notificationMessageFormat">NotificationMessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.notificationTopicId">NotificationTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.numApprovalsRequired">NumApprovalsRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames">PreApprovedServiceProviderActionNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeDeleted">TimeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.vaultKeyId">VaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationControlIdInput">DelegationControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationControlId">DelegationControlId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DelegationSubscriptionIds`<sup>Required</sup> <a name="DelegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationSubscriptionIds"></a>

```csharp
public string[] DelegationSubscriptionIds { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutoApproveDuringMaintenance`<sup>Required</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance"></a>

```csharp
public IResolvable IsAutoApproveDuringMaintenance { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.lifecycleStateDetails"></a>

```csharp
public string LifecycleStateDetails { get; }
```

- *Type:* string

---

##### `NotificationMessageFormat`<sup>Required</sup> <a name="NotificationMessageFormat" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.notificationMessageFormat"></a>

```csharp
public string NotificationMessageFormat { get; }
```

- *Type:* string

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.notificationTopicId"></a>

```csharp
public string NotificationTopicId { get; }
```

- *Type:* string

---

##### `NumApprovalsRequired`<sup>Required</sup> <a name="NumApprovalsRequired" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.numApprovalsRequired"></a>

```csharp
public double NumApprovalsRequired { get; }
```

- *Type:* double

---

##### `PreApprovedServiceProviderActionNames`<sup>Required</sup> <a name="PreApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames"></a>

```csharp
public string[] PreApprovedServiceProviderActionNames { get; }
```

- *Type:* string[]

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDeleted`<sup>Required</sup> <a name="TimeDeleted" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeDeleted"></a>

```csharp
public string TimeDeleted { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `VaultKeyId`<sup>Required</sup> <a name="VaultKeyId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.vaultKeyId"></a>

```csharp
public string VaultKeyId { get; }
```

- *Type:* string

---

##### `DelegationControlIdInput`<sup>Optional</sup> <a name="DelegationControlIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationControlIdInput"></a>

```csharp
public string DelegationControlIdInput { get; }
```

- *Type:* string

---

##### `DelegationControlId`<sup>Required</sup> <a name="DelegationControlId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationControlId"></a>

```csharp
public string DelegationControlId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegationControlConfig <a name="DataOciDelegateAccessControlDelegationControlConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDelegateAccessControlDelegationControlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DelegationControlId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.delegationControlId">DelegationControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control#delegation_control_id DataOciDelegateAccessControlDelegationControl#delegation_control_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DelegationControlId`<sup>Required</sup> <a name="DelegationControlId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.delegationControlId"></a>

```csharp
public string DelegationControlId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control#delegation_control_id DataOciDelegateAccessControlDelegationControl#delegation_control_id}.

---



