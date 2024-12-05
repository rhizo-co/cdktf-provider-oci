# `dataOciDisasterRecoveryDrProtectionGroup` Submodule <a name="`dataOciDisasterRecoveryDrProtectionGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrProtectionGroup <a name="DataOciDisasterRecoveryDrProtectionGroup" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group oci_disaster_recovery_dr_protection_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroup(scope Construct, id *string, config DataOciDisasterRecoveryDrProtectionGroupConfig) DataOciDisasterRecoveryDrProtectionGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig">DataOciDisasterRecoveryDrProtectionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig">DataOciDisasterRecoveryDrProtectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrProtectionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDisasterRecoveryDrProtectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDisasterRecoveryDrProtectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrProtectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.association">Association</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList">DataOciDisasterRecoveryDrProtectionGroupAssociationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.disassociateTrigger">DisassociateTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifeCycleDetails">LifeCycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifecycleSubState">LifecycleSubState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.logLocation">LogLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList">DataOciDisasterRecoveryDrProtectionGroupLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.members">Members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList">DataOciDisasterRecoveryDrProtectionGroupMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.peerId">PeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.drProtectionGroupIdInput">DrProtectionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Association`<sup>Required</sup> <a name="Association" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.association"></a>

```go
func Association() DataOciDisasterRecoveryDrProtectionGroupAssociationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList">DataOciDisasterRecoveryDrProtectionGroupAssociationList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisassociateTrigger`<sup>Required</sup> <a name="DisassociateTrigger" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.disassociateTrigger"></a>

```go
func DisassociateTrigger() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifeCycleDetails`<sup>Required</sup> <a name="LifeCycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifeCycleDetails"></a>

```go
func LifeCycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.lifecycleSubState"></a>

```go
func LifecycleSubState() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.logLocation"></a>

```go
func LogLocation() DataOciDisasterRecoveryDrProtectionGroupLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList">DataOciDisasterRecoveryDrProtectionGroupLogLocationList</a>

---

##### `Members`<sup>Required</sup> <a name="Members" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.members"></a>

```go
func Members() DataOciDisasterRecoveryDrProtectionGroupMembersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList">DataOciDisasterRecoveryDrProtectionGroupMembersList</a>

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.peerId"></a>

```go
func PeerId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DrProtectionGroupIdInput`<sup>Optional</sup> <a name="DrProtectionGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.drProtectionGroupIdInput"></a>

```go
func DrProtectionGroupIdInput() *string
```

- *Type:* *string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.drProtectionGroupId"></a>

```go
func DrProtectionGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrProtectionGroupAssociation <a name="DataOciDisasterRecoveryDrProtectionGroupAssociation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupAssociation {

}
```


### DataOciDisasterRecoveryDrProtectionGroupConfig <a name="DataOciDisasterRecoveryDrProtectionGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DrProtectionGroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroup#dr_protection_group_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupConfig.property.drProtectionGroupId"></a>

```go
DrProtectionGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_protection_group#dr_protection_group_id DataOciDisasterRecoveryDrProtectionGroup#dr_protection_group_id}.

---

### DataOciDisasterRecoveryDrProtectionGroupLogLocation <a name="DataOciDisasterRecoveryDrProtectionGroupLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembers <a name="DataOciDisasterRecoveryDrProtectionGroupMembers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembers {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings <a name="DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping {

}
```


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

&dataocidisasterrecoverydrprotectiongroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrProtectionGroupAssociationList <a name="DataOciDisasterRecoveryDrProtectionGroupAssociationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupAssociationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupAssociationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerId">PeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociation">DataOciDisasterRecoveryDrProtectionGroupAssociation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeerId`<sup>Required</sup> <a name="PeerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerId"></a>

```go
func PeerId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupAssociation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupAssociation">DataOciDisasterRecoveryDrProtectionGroupAssociation</a>

---


### DataOciDisasterRecoveryDrProtectionGroupLogLocationList <a name="DataOciDisasterRecoveryDrProtectionGroupLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupLogLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupLogLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation">DataOciDisasterRecoveryDrProtectionGroupLogLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupLogLocation">DataOciDisasterRecoveryDrProtectionGroupLogLocation</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetName">DestinationBackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable">IsBackendSetForNonMovable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetName">SourceBackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationBackendSetName`<sup>Required</sup> <a name="DestinationBackendSetName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.destinationBackendSetName"></a>

```go
func DestinationBackendSetName() *string
```

- *Type:* *string

---

##### `IsBackendSetForNonMovable`<sup>Required</sup> <a name="IsBackendSetForNonMovable" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.isBackendSetForNonMovable"></a>

```go
func IsBackendSetForNonMovable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SourceBackendSetName`<sup>Required</sup> <a name="SourceBackendSetName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.sourceBackendSetName"></a>

```go
func SourceBackendSetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings">DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId">VolumeAttachmentReferenceInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VolumeAttachmentReferenceInstanceId`<sup>Required</sup> <a name="VolumeAttachmentReferenceInstanceId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.volumeAttachmentReferenceInstanceId"></a>

```go
func VolumeAttachmentReferenceInstanceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetails">AttachmentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeId">BlockVolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetails">MountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentDetails`<sup>Required</sup> <a name="AttachmentDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.attachmentDetails"></a>

```go
func AttachmentDetails() DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsAttachmentDetailsList</a>

---

##### `BlockVolumeId`<sup>Required</sup> <a name="BlockVolumeId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.blockVolumeId"></a>

```go
func BlockVolumeId() *string
```

- *Type:* *string

---

##### `MountDetails`<sup>Required</sup> <a name="MountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.mountDetails"></a>

```go
func MountDetails() DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsMountDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperations</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetId">DestinationMountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportId">ExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings">DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationMountTargetId`<sup>Required</sup> <a name="DestinationMountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.destinationMountTargetId"></a>

```go
func DestinationMountTargetId() *string
```

- *Type:* *string

---

##### `ExportId`<sup>Required</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.exportId"></a>

```go
func ExportId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings">DataOciDisasterRecoveryDrProtectionGroupMembersExportMappings</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.mountTargetId"></a>

```go
func MountTargetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPath">ExportPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetails">MountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetails">UnmountDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.exportPath"></a>

```go
func ExportPath() *string
```

- *Type:* *string

---

##### `MountDetails`<sup>Required</sup> <a name="MountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountDetails"></a>

```go
func MountDetails() DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsMountDetailsList</a>

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.mountTargetId"></a>

```go
func MountTargetId() *string
```

- *Type:* *string

---

##### `UnmountDetails`<sup>Required</sup> <a name="UnmountDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.unmountDetails"></a>

```go
func UnmountDetails() DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperations</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.mountTargetId"></a>

```go
func MountTargetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsUnmountDetails</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills">AutonomousDatabaseStandbyTypeForDrDrills</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappings">BackendSetMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperations">BlockVolumeOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringType">ConnectionStringType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomain">DestinationAvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationId">DestinationCapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentId">DestinationCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostId">DestinationDedicatedVmHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerId">DestinationLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerId">DestinationNetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappings">ExportMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperations">FileSystemOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovable">IsMovable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomain">IsRetainFaultDomain</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabled">IsStartStopEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberId">MemberId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberType">MemberType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretId">PasswordVaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMapping">VnicMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappings">VnicMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembers">DataOciDisasterRecoveryDrProtectionGroupMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseStandbyTypeForDrDrills`<sup>Required</sup> <a name="AutonomousDatabaseStandbyTypeForDrDrills" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.autonomousDatabaseStandbyTypeForDrDrills"></a>

```go
func AutonomousDatabaseStandbyTypeForDrDrills() *string
```

- *Type:* *string

---

##### `BackendSetMappings`<sup>Required</sup> <a name="BackendSetMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.backendSetMappings"></a>

```go
func BackendSetMappings() DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersBackendSetMappingsList</a>

---

##### `BlockVolumeOperations`<sup>Required</sup> <a name="BlockVolumeOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.blockVolumeOperations"></a>

```go
func BlockVolumeOperations() DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList">DataOciDisasterRecoveryDrProtectionGroupMembersBlockVolumeOperationsList</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ConnectionStringType`<sup>Required</sup> <a name="ConnectionStringType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.connectionStringType"></a>

```go
func ConnectionStringType() *string
```

- *Type:* *string

---

##### `DestinationAvailabilityDomain`<sup>Required</sup> <a name="DestinationAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationAvailabilityDomain"></a>

```go
func DestinationAvailabilityDomain() *string
```

- *Type:* *string

---

##### `DestinationCapacityReservationId`<sup>Required</sup> <a name="DestinationCapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCapacityReservationId"></a>

```go
func DestinationCapacityReservationId() *string
```

- *Type:* *string

---

##### `DestinationCompartmentId`<sup>Required</sup> <a name="DestinationCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationCompartmentId"></a>

```go
func DestinationCompartmentId() *string
```

- *Type:* *string

---

##### `DestinationDedicatedVmHostId`<sup>Required</sup> <a name="DestinationDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationDedicatedVmHostId"></a>

```go
func DestinationDedicatedVmHostId() *string
```

- *Type:* *string

---

##### `DestinationLoadBalancerId`<sup>Required</sup> <a name="DestinationLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationLoadBalancerId"></a>

```go
func DestinationLoadBalancerId() *string
```

- *Type:* *string

---

##### `DestinationNetworkLoadBalancerId`<sup>Required</sup> <a name="DestinationNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.destinationNetworkLoadBalancerId"></a>

```go
func DestinationNetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `ExportMappings`<sup>Required</sup> <a name="ExportMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.exportMappings"></a>

```go
func ExportMappings() DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersExportMappingsList</a>

---

##### `FileSystemOperations`<sup>Required</sup> <a name="FileSystemOperations" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.fileSystemOperations"></a>

```go
func FileSystemOperations() DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList">DataOciDisasterRecoveryDrProtectionGroupMembersFileSystemOperationsList</a>

---

##### `IsMovable`<sup>Required</sup> <a name="IsMovable" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isMovable"></a>

```go
func IsMovable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRetainFaultDomain`<sup>Required</sup> <a name="IsRetainFaultDomain" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isRetainFaultDomain"></a>

```go
func IsRetainFaultDomain() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsStartStopEnabled`<sup>Required</sup> <a name="IsStartStopEnabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.isStartStopEnabled"></a>

```go
func IsStartStopEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberId"></a>

```go
func MemberId() *string
```

- *Type:* *string

---

##### `MemberType`<sup>Required</sup> <a name="MemberType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.memberType"></a>

```go
func MemberType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PasswordVaultSecretId`<sup>Required</sup> <a name="PasswordVaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.passwordVaultSecretId"></a>

```go
func PasswordVaultSecretId() *string
```

- *Type:* *string

---

##### `VnicMapping`<sup>Required</sup> <a name="VnicMapping" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMapping"></a>

```go
func VnicMapping() DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList</a>

---

##### `VnicMappings`<sup>Required</sup> <a name="VnicMappings" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.vnicMappings"></a>

```go
func VnicMappings() DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembers">DataOciDisasterRecoveryDrProtectionGroupMembers</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdList">DestinationNsgIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetId">DestinationSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicId">SourceVnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationNsgIdList`<sup>Required</sup> <a name="DestinationNsgIdList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationNsgIdList"></a>

```go
func DestinationNsgIdList() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationSubnetId`<sup>Required</sup> <a name="DestinationSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.destinationSubnetId"></a>

```go
func DestinationSubnetId() *string
```

- *Type:* *string

---

##### `SourceVnicId`<sup>Required</sup> <a name="SourceVnicId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.sourceVnicId"></a>

```go
func SourceVnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMapping</a>

---


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get"></a>

```go
func Get(index *f64) DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference <a name="DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidisasterrecoverydrprotectiongroup"

dataocidisasterrecoverydrprotectiongroup.NewDataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdList">DestinationNsgIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress">DestinationPrimaryPrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel">DestinationPrimaryPrivateIpHostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetId">DestinationSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicId">SourceVnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationNsgIdList`<sup>Required</sup> <a name="DestinationNsgIdList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationNsgIdList"></a>

```go
func DestinationNsgIdList() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrimaryPrivateIpAddress`<sup>Required</sup> <a name="DestinationPrimaryPrivateIpAddress" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpAddress"></a>

```go
func DestinationPrimaryPrivateIpAddress() *string
```

- *Type:* *string

---

##### `DestinationPrimaryPrivateIpHostnameLabel`<sup>Required</sup> <a name="DestinationPrimaryPrivateIpHostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationPrimaryPrivateIpHostnameLabel"></a>

```go
func DestinationPrimaryPrivateIpHostnameLabel() *string
```

- *Type:* *string

---

##### `DestinationSubnetId`<sup>Required</sup> <a name="DestinationSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.destinationSubnetId"></a>

```go
func DestinationSubnetId() *string
```

- *Type:* *string

---

##### `SourceVnicId`<sup>Required</sup> <a name="SourceVnicId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.sourceVnicId"></a>

```go
func SourceVnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrProtectionGroup.DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings">DataOciDisasterRecoveryDrProtectionGroupMembersVnicMappings</a>

---



