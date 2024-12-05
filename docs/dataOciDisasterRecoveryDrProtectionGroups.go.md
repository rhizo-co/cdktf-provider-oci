# `dataOciDisasterRecoveryDrProtectionGroups` Submodule <a name="`dataOciDisasterRecoveryDrProtectionGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrProtectionGroups <a name="DataOciDisasterRecoveryDrProtectionGroups" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups oci_disaster_recovery_dr_protection_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroups(scope Construct, id *string, config DataOciDisasterRecoveryDrProtectionGroupsConfig) DataOciDisasterRecoveryDrProtectionGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig">DataOciDisasterRecoveryDrProtectionGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig">DataOciDisasterRecoveryDrProtectionGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetDrProtectionGroupId">ResetDrProtectionGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetLifecycleSubState">ResetLifecycleSubState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDrProtectionGroupId` <a name="ResetDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetDrProtectionGroupId"></a>

```go
func ResetDrProtectionGroupId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetId"></a>

```go
func ResetId()
```

##### `ResetLifecycleSubState` <a name="ResetLifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetLifecycleSubState"></a>

```go
func ResetLifecycleSubState()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetRole"></a>

```go
func ResetRole()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDisasterRecoveryDrProtectionGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDisasterRecoveryDrProtectionGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrProtectionGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupCollection">DrProtectionGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList">DataOciDisasterRecoveryDrProtectionGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupIdInput">DrProtectionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycleSubStateInput">LifecycleSubStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycleSubState">LifecycleSubState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DrProtectionGroupCollection`<sup>Required</sup> <a name="DrProtectionGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupCollection"></a>

```go
func DrProtectionGroupCollection() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.filter"></a>

```go
func Filter() DataOciDisasterRecoveryDrProtectionGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList">DataOciDisasterRecoveryDrProtectionGroupsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DrProtectionGroupIdInput`<sup>Optional</sup> <a name="DrProtectionGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupIdInput"></a>

```go
func DrProtectionGroupIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LifecycleSubStateInput`<sup>Optional</sup> <a name="LifecycleSubStateInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycleSubStateInput"></a>

```go
func LifecycleSubStateInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.drProtectionGroupId"></a>

```go
func DrProtectionGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.lifecycleSubState"></a>

```go
func LifecycleSubState() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrProtectionGroupsConfig <a name="DataOciDisasterRecoveryDrProtectionGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	DrProtectionGroupId: *string,
	Filter: interface{},
	Id: *string,
	LifecycleSubState: *string,
	Role: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#compartment_id DataOciDisasterRecoveryDrProtectionGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#display_name DataOciDisasterRecoveryDrProtectionGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroups#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#id DataOciDisasterRecoveryDrProtectionGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.lifecycleSubState">LifecycleSubState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#lifecycle_sub_state DataOciDisasterRecoveryDrProtectionGroups#lifecycle_sub_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#role DataOciDisasterRecoveryDrProtectionGroups#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#state DataOciDisasterRecoveryDrProtectionGroups#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#compartment_id DataOciDisasterRecoveryDrProtectionGroups#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#display_name DataOciDisasterRecoveryDrProtectionGroups#display_name}.

---

##### `DrProtectionGroupId`<sup>Optional</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.drProtectionGroupId"></a>

```go
DrProtectionGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroups#dr_protection_group_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#filter DataOciDisasterRecoveryDrProtectionGroups#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#id DataOciDisasterRecoveryDrProtectionGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleSubState`<sup>Optional</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.lifecycleSubState"></a>

```go
LifecycleSubState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#lifecycle_sub_state DataOciDisasterRecoveryDrProtectionGroups#lifecycle_sub_state}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#role DataOciDisasterRecoveryDrProtectionGroups#role}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#state DataOciDisasterRecoveryDrProtectionGroups#state}.

---

### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings {

}
```


### DataOciDisasterRecoveryDrProtectionGroupsFilter <a name="DataOciDisasterRecoveryDrProtectionGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

&dataocidisasterrecoverydrprotectiongroups.DataOciDisasterRecoveryDrProtectionGroupsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#name DataOciDisasterRecoveryDrProtectionGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#values DataOciDisasterRecoveryDrProtectionGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#regex DataOciDisasterRecoveryDrProtectionGroups#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#name DataOciDisasterRecoveryDrProtectionGroups#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#values DataOciDisasterRecoveryDrProtectionGroups#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_groups#regex DataOciDisasterRecoveryDrProtectionGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.peerId">PeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.peerId"></a>

```go
func PeerId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociation</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocation</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.destinationBackendSetName">DestinationBackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable">IsBackendSetForNonMovable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.sourceBackendSetName">SourceBackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationBackendSetName`<sup>Required</sup> <a name="DestinationBackendSetName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.destinationBackendSetName"></a>

```go
func DestinationBackendSetName() *string
```

- *Type:* *string

---

##### `IsBackendSetForNonMovable`<sup>Required</sup> <a name="IsBackendSetForNonMovable" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable"></a>

```go
func IsBackendSetForNonMovable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SourceBackendSetName`<sup>Required</sup> <a name="SourceBackendSetName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.sourceBackendSetName"></a>

```go
func SourceBackendSetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId">VolumeAttachmentReferenceInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VolumeAttachmentReferenceInstanceId`<sup>Required</sup> <a name="VolumeAttachmentReferenceInstanceId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId"></a>

```go
func VolumeAttachmentReferenceInstanceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.attachmentDetails">AttachmentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.blockVolumeId">BlockVolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.mountDetails">MountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentDetails`<sup>Required</sup> <a name="AttachmentDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.attachmentDetails"></a>

```go
func AttachmentDetails() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsAttachmentDetailsList</a>

---

##### `BlockVolumeId`<sup>Required</sup> <a name="BlockVolumeId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.blockVolumeId"></a>

```go
func BlockVolumeId() *string
```

- *Type:* *string

---

##### `MountDetails`<sup>Required</sup> <a name="MountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.mountDetails"></a>

```go
func MountDetails() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsMountDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperations</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.destinationMountTargetId">DestinationMountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.exportId">ExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationMountTargetId`<sup>Required</sup> <a name="DestinationMountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.destinationMountTargetId"></a>

```go
func DestinationMountTargetId() *string
```

- *Type:* *string

---

##### `ExportId`<sup>Required</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.exportId"></a>

```go
func ExportId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId"></a>

```go
func MountTargetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.exportPath">ExportPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountDetails">MountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.unmountDetails">UnmountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.exportPath"></a>

```go
func ExportPath() *string
```

- *Type:* *string

---

##### `MountDetails`<sup>Required</sup> <a name="MountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountDetails"></a>

```go
func MountDetails() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsMountDetailsList</a>

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.mountTargetId"></a>

```go
func MountTargetId() *string
```

- *Type:* *string

---

##### `UnmountDetails`<sup>Required</sup> <a name="UnmountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.unmountDetails"></a>

```go
func UnmountDetails() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperations</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId"></a>

```go
func MountTargetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsUnmountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills">AutonomousDatabaseStandbyTypeForDrDrills</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.backendSetMappings">BackendSetMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.blockVolumeOperations">BlockVolumeOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.connectionStringType">ConnectionStringType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationAvailabilityDomain">DestinationAvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationCapacityReservationId">DestinationCapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationCompartmentId">DestinationCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationDedicatedVmHostId">DestinationDedicatedVmHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationLoadBalancerId">DestinationLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationNetworkLoadBalancerId">DestinationNetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.exportMappings">ExportMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.fileSystemOperations">FileSystemOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isMovable">IsMovable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isRetainFaultDomain">IsRetainFaultDomain</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isStartStopEnabled">IsStartStopEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.memberId">MemberId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.memberType">MemberType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.passwordVaultSecretId">PasswordVaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.vnicMapping">VnicMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.vnicMappings">VnicMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseStandbyTypeForDrDrills`<sup>Required</sup> <a name="AutonomousDatabaseStandbyTypeForDrDrills" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills"></a>

```go
func AutonomousDatabaseStandbyTypeForDrDrills() *string
```

- *Type:* *string

---

##### `BackendSetMappings`<sup>Required</sup> <a name="BackendSetMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.backendSetMappings"></a>

```go
func BackendSetMappings() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBackendSetMappingsList</a>

---

##### `BlockVolumeOperations`<sup>Required</sup> <a name="BlockVolumeOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.blockVolumeOperations"></a>

```go
func BlockVolumeOperations() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersBlockVolumeOperationsList</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ConnectionStringType`<sup>Required</sup> <a name="ConnectionStringType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.connectionStringType"></a>

```go
func ConnectionStringType() *string
```

- *Type:* *string

---

##### `DestinationAvailabilityDomain`<sup>Required</sup> <a name="DestinationAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationAvailabilityDomain"></a>

```go
func DestinationAvailabilityDomain() *string
```

- *Type:* *string

---

##### `DestinationCapacityReservationId`<sup>Required</sup> <a name="DestinationCapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationCapacityReservationId"></a>

```go
func DestinationCapacityReservationId() *string
```

- *Type:* *string

---

##### `DestinationCompartmentId`<sup>Required</sup> <a name="DestinationCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationCompartmentId"></a>

```go
func DestinationCompartmentId() *string
```

- *Type:* *string

---

##### `DestinationDedicatedVmHostId`<sup>Required</sup> <a name="DestinationDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationDedicatedVmHostId"></a>

```go
func DestinationDedicatedVmHostId() *string
```

- *Type:* *string

---

##### `DestinationLoadBalancerId`<sup>Required</sup> <a name="DestinationLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationLoadBalancerId"></a>

```go
func DestinationLoadBalancerId() *string
```

- *Type:* *string

---

##### `DestinationNetworkLoadBalancerId`<sup>Required</sup> <a name="DestinationNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.destinationNetworkLoadBalancerId"></a>

```go
func DestinationNetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `ExportMappings`<sup>Required</sup> <a name="ExportMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.exportMappings"></a>

```go
func ExportMappings() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersExportMappingsList</a>

---

##### `FileSystemOperations`<sup>Required</sup> <a name="FileSystemOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.fileSystemOperations"></a>

```go
func FileSystemOperations() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersFileSystemOperationsList</a>

---

##### `IsMovable`<sup>Required</sup> <a name="IsMovable" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isMovable"></a>

```go
func IsMovable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRetainFaultDomain`<sup>Required</sup> <a name="IsRetainFaultDomain" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isRetainFaultDomain"></a>

```go
func IsRetainFaultDomain() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsStartStopEnabled`<sup>Required</sup> <a name="IsStartStopEnabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.isStartStopEnabled"></a>

```go
func IsStartStopEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.memberId"></a>

```go
func MemberId() *string
```

- *Type:* *string

---

##### `MemberType`<sup>Required</sup> <a name="MemberType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.memberType"></a>

```go
func MemberType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PasswordVaultSecretId`<sup>Required</sup> <a name="PasswordVaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.passwordVaultSecretId"></a>

```go
func PasswordVaultSecretId() *string
```

- *Type:* *string

---

##### `VnicMapping`<sup>Required</sup> <a name="VnicMapping" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.vnicMapping"></a>

```go
func VnicMapping() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList</a>

---

##### `VnicMappings`<sup>Required</sup> <a name="VnicMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.vnicMappings"></a>

```go
func VnicMappings() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembers</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.destinationNsgIdList">DestinationNsgIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.destinationSubnetId">DestinationSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.sourceVnicId">SourceVnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationNsgIdList`<sup>Required</sup> <a name="DestinationNsgIdList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.destinationNsgIdList"></a>

```go
func DestinationNsgIdList() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationSubnetId`<sup>Required</sup> <a name="DestinationSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.destinationSubnetId"></a>

```go
func DestinationSubnetId() *string
```

- *Type:* *string

---

##### `SourceVnicId`<sup>Required</sup> <a name="SourceVnicId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.sourceVnicId"></a>

```go
func SourceVnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMapping</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationNsgIdList">DestinationNsgIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress">DestinationPrimaryPrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel">DestinationPrimaryPrivateIpHostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationSubnetId">DestinationSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.sourceVnicId">SourceVnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationNsgIdList`<sup>Required</sup> <a name="DestinationNsgIdList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationNsgIdList"></a>

```go
func DestinationNsgIdList() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrimaryPrivateIpAddress`<sup>Required</sup> <a name="DestinationPrimaryPrivateIpAddress" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress"></a>

```go
func DestinationPrimaryPrivateIpAddress() *string
```

- *Type:* *string

---

##### `DestinationPrimaryPrivateIpHostnameLabel`<sup>Required</sup> <a name="DestinationPrimaryPrivateIpHostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel"></a>

```go
func DestinationPrimaryPrivateIpHostnameLabel() *string
```

- *Type:* *string

---

##### `DestinationSubnetId`<sup>Required</sup> <a name="DestinationSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.destinationSubnetId"></a>

```go
func DestinationSubnetId() *string
```

- *Type:* *string

---

##### `SourceVnicId`<sup>Required</sup> <a name="SourceVnicId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.sourceVnicId"></a>

```go
func SourceVnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersVnicMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.association">Association</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.disassociateTrigger">DisassociateTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.lifeCycleDetails">LifeCycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.lifecycleSubState">LifecycleSubState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.members">Members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.peerId">PeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Association`<sup>Required</sup> <a name="Association" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.association"></a>

```go
func Association() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsAssociationList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisassociateTrigger`<sup>Required</sup> <a name="DisassociateTrigger" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.disassociateTrigger"></a>

```go
func DisassociateTrigger() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifeCycleDetails`<sup>Required</sup> <a name="LifeCycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.lifeCycleDetails"></a>

```go
func LifeCycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.lifecycleSubState"></a>

```go
func LifecycleSubState() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.logLocation"></a>

```go
func LogLocation() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsLogLocationList</a>

---

##### `Members`<sup>Required</sup> <a name="Members" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.members"></a>

```go
func Members() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsMembersList</a>

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.peerId"></a>

```go
func PeerId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItems</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection">DataOciDisasterRecoveryDrProtectionGroupsDrProtectionGroupCollection</a>

---


### DataOciDisasterRecoveryDrProtectionGroupsFilterList <a name="DataOciDisasterRecoveryDrProtectionGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroups"

dataocidisasterrecoverydrprotectiongroups.NewDataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroups.DataOciDisasterRecoveryDrProtectionGroupsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



