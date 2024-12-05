# `dataOciOptimizerEnrollmentStatuses` Submodule <a name="`dataOciOptimizerEnrollmentStatuses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerEnrollmentStatuses <a name="DataOciOptimizerEnrollmentStatuses" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses oci_optimizer_enrollment_statuses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.NewDataOciOptimizerEnrollmentStatuses(scope Construct, id *string, config DataOciOptimizerEnrollmentStatusesConfig) DataOciOptimizerEnrollmentStatuses
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig">DataOciOptimizerEnrollmentStatusesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig">DataOciOptimizerEnrollmentStatusesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetState"></a>

```go
func ResetState()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatuses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.DataOciOptimizerEnrollmentStatuses_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.DataOciOptimizerEnrollmentStatuses_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.DataOciOptimizerEnrollmentStatuses_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.DataOciOptimizerEnrollmentStatuses_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatuses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOptimizerEnrollmentStatuses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOptimizerEnrollmentStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerEnrollmentStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.enrollmentStatusCollection">EnrollmentStatusCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList">DataOciOptimizerEnrollmentStatusesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EnrollmentStatusCollection`<sup>Required</sup> <a name="EnrollmentStatusCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.enrollmentStatusCollection"></a>

```go
func EnrollmentStatusCollection() DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filter"></a>

```go
func Filter() DataOciOptimizerEnrollmentStatusesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList">DataOciOptimizerEnrollmentStatusesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerEnrollmentStatusesConfig <a name="DataOciOptimizerEnrollmentStatusesConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

&dataocioptimizerenrollmentstatuses.DataOciOptimizerEnrollmentStatusesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#filter DataOciOptimizerEnrollmentStatuses#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}.

---

### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

&dataocioptimizerenrollmentstatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection {

}
```


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

&dataocioptimizerenrollmentstatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems {

}
```


### DataOciOptimizerEnrollmentStatusesFilter <a name="DataOciOptimizerEnrollmentStatusesFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

&dataocioptimizerenrollmentstatuses.DataOciOptimizerEnrollmentStatusesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#name DataOciOptimizerEnrollmentStatuses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#values DataOciOptimizerEnrollmentStatuses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#regex DataOciOptimizerEnrollmentStatuses#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#name DataOciOptimizerEnrollmentStatuses#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#values DataOciOptimizerEnrollmentStatuses#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#regex DataOciOptimizerEnrollmentStatuses#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.NewDataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.NewDataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.enrollmentStatusId">EnrollmentStatusId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `EnrollmentStatusId`<sup>Required</sup> <a name="EnrollmentStatusId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.enrollmentStatusId"></a>

```go
func EnrollmentStatusId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems</a>

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.NewDataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get"></a>

```go
func Get(index *f64) DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.NewDataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection</a>

---


### DataOciOptimizerEnrollmentStatusesFilterList <a name="DataOciOptimizerEnrollmentStatusesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.NewDataOciOptimizerEnrollmentStatusesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOptimizerEnrollmentStatusesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get"></a>

```go
func Get(index *f64) DataOciOptimizerEnrollmentStatusesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOptimizerEnrollmentStatusesFilterOutputReference <a name="DataOciOptimizerEnrollmentStatusesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerenrollmentstatuses"

dataocioptimizerenrollmentstatuses.NewDataOciOptimizerEnrollmentStatusesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOptimizerEnrollmentStatusesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



