# `dataOciOperatorAccessControlOperatorControlAssignments` Submodule <a name="`dataOciOperatorAccessControlOperatorControlAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorControlAssignments <a name="DataOciOperatorAccessControlOperatorControlAssignments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments oci_operator_access_control_operator_control_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.NewDataOciOperatorAccessControlOperatorControlAssignments(scope Construct, id *string, config DataOciOperatorAccessControlOperatorControlAssignmentsConfig) DataOciOperatorAccessControlOperatorControlAssignments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig">DataOciOperatorAccessControlOperatorControlAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig">DataOciOperatorAccessControlOperatorControlAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOperatorControlName">ResetOperatorControlName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetId"></a>

```go
func ResetId()
```

##### `ResetOperatorControlName` <a name="ResetOperatorControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetOperatorControlName"></a>

```go
func ResetOperatorControlName()
```

##### `ResetResourceName` <a name="ResetResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceName"></a>

```go
func ResetResourceName()
```

##### `ResetResourceType` <a name="ResetResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.DataOciOperatorAccessControlOperatorControlAssignments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.DataOciOperatorAccessControlOperatorControlAssignments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.DataOciOperatorAccessControlOperatorControlAssignments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.DataOciOperatorAccessControlOperatorControlAssignments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControlAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOperatorAccessControlOperatorControlAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControlAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList">DataOciOperatorAccessControlOperatorControlAssignmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlAssignmentCollection">OperatorControlAssignmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlNameInput">OperatorControlNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlName">OperatorControlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filter"></a>

```go
func Filter() DataOciOperatorAccessControlOperatorControlAssignmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList">DataOciOperatorAccessControlOperatorControlAssignmentsFilterList</a>

---

##### `OperatorControlAssignmentCollection`<sup>Required</sup> <a name="OperatorControlAssignmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlAssignmentCollection"></a>

```go
func OperatorControlAssignmentCollection() DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OperatorControlNameInput`<sup>Optional</sup> <a name="OperatorControlNameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlNameInput"></a>

```go
func OperatorControlNameInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OperatorControlName`<sup>Required</sup> <a name="OperatorControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.operatorControlName"></a>

```go
func OperatorControlName() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorControlAssignmentsConfig <a name="DataOciOperatorAccessControlOperatorControlAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

&dataocioperatoraccesscontroloperatorcontrolassignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig {
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
	OperatorControlName: *string,
	ResourceName: *string,
	ResourceType: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#compartment_id DataOciOperatorAccessControlOperatorControlAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#id DataOciOperatorAccessControlOperatorControlAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.operatorControlName">OperatorControlName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#operator_control_name DataOciOperatorAccessControlOperatorControlAssignments#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceName">ResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_name DataOciOperatorAccessControlOperatorControlAssignments#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_type DataOciOperatorAccessControlOperatorControlAssignments#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#state DataOciOperatorAccessControlOperatorControlAssignments#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#compartment_id DataOciOperatorAccessControlOperatorControlAssignments#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#filter DataOciOperatorAccessControlOperatorControlAssignments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#id DataOciOperatorAccessControlOperatorControlAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperatorControlName`<sup>Optional</sup> <a name="OperatorControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.operatorControlName"></a>

```go
OperatorControlName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#operator_control_name DataOciOperatorAccessControlOperatorControlAssignments#operator_control_name}.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_name DataOciOperatorAccessControlOperatorControlAssignments#resource_name}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_type DataOciOperatorAccessControlOperatorControlAssignments#resource_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#state DataOciOperatorAccessControlOperatorControlAssignments#state}.

---

### DataOciOperatorAccessControlOperatorControlAssignmentsFilter <a name="DataOciOperatorAccessControlOperatorControlAssignmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

&dataocioperatoraccesscontroloperatorcontrolassignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#name DataOciOperatorAccessControlOperatorControlAssignments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#values DataOciOperatorAccessControlOperatorControlAssignments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#regex DataOciOperatorAccessControlOperatorControlAssignments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#name DataOciOperatorAccessControlOperatorControlAssignments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#values DataOciOperatorAccessControlOperatorControlAssignments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignments#regex DataOciOperatorAccessControlOperatorControlAssignments#regex}.

---

### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

&dataocioperatoraccesscontroloperatorcontrolassignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection {

}
```


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

&dataocioperatoraccesscontroloperatorcontrolassignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlOperatorControlAssignmentsFilterList <a name="DataOciOperatorAccessControlOperatorControlAssignmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.NewDataOciOperatorAccessControlOperatorControlAssignmentsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOperatorAccessControlOperatorControlAssignmentsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.get"></a>

```go
func Get(index *f64) DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference <a name="DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.NewDataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.NewDataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.NewDataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.assignerId">AssignerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.detachmentDescription">DetachmentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorCode">ErrorCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isDefaultAssignment">IsDefaultAssignment</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isEnforcedAlways">IsEnforcedAlways</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isHypervisorLogForwarded">IsHypervisorLogForwarded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isLogForwarded">IsLogForwarded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.opControlName">OpControlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.operatorControlId">OperatorControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerAddress">RemoteSyslogServerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerCaCert">RemoteSyslogServerCaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerPort">RemoteSyslogServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentFrom">TimeAssignmentFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentTo">TimeAssignmentTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfAssignment">TimeOfAssignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.unassignerId">UnassignerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.validateAssignmentTrigger">ValidateAssignmentTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignerId`<sup>Required</sup> <a name="AssignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.assignerId"></a>

```go
func AssignerId() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DetachmentDescription`<sup>Required</sup> <a name="DetachmentDescription" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.detachmentDescription"></a>

```go
func DetachmentDescription() *string
```

- *Type:* *string

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorCode"></a>

```go
func ErrorCode() *f64
```

- *Type:* *f64

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoApproveDuringMaintenance`<sup>Required</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isAutoApproveDuringMaintenance"></a>

```go
func IsAutoApproveDuringMaintenance() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDefaultAssignment`<sup>Required</sup> <a name="IsDefaultAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isDefaultAssignment"></a>

```go
func IsDefaultAssignment() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnforcedAlways`<sup>Required</sup> <a name="IsEnforcedAlways" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isEnforcedAlways"></a>

```go
func IsEnforcedAlways() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHypervisorLogForwarded`<sup>Required</sup> <a name="IsHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isHypervisorLogForwarded"></a>

```go
func IsHypervisorLogForwarded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsLogForwarded`<sup>Required</sup> <a name="IsLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.isLogForwarded"></a>

```go
func IsLogForwarded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OpControlName`<sup>Required</sup> <a name="OpControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.opControlName"></a>

```go
func OpControlName() *string
```

- *Type:* *string

---

##### `OperatorControlId`<sup>Required</sup> <a name="OperatorControlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.operatorControlId"></a>

```go
func OperatorControlId() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerAddress`<sup>Required</sup> <a name="RemoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerAddress"></a>

```go
func RemoteSyslogServerAddress() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerCaCert`<sup>Required</sup> <a name="RemoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerCaCert"></a>

```go
func RemoteSyslogServerCaCert() *string
```

- *Type:* *string

---

##### `RemoteSyslogServerPort`<sup>Required</sup> <a name="RemoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.remoteSyslogServerPort"></a>

```go
func RemoteSyslogServerPort() *f64
```

- *Type:* *f64

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceCompartmentId"></a>

```go
func ResourceCompartmentId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeAssignmentFrom`<sup>Required</sup> <a name="TimeAssignmentFrom" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentFrom"></a>

```go
func TimeAssignmentFrom() *string
```

- *Type:* *string

---

##### `TimeAssignmentTo`<sup>Required</sup> <a name="TimeAssignmentTo" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeAssignmentTo"></a>

```go
func TimeAssignmentTo() *string
```

- *Type:* *string

---

##### `TimeOfAssignment`<sup>Required</sup> <a name="TimeOfAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfAssignment"></a>

```go
func TimeOfAssignment() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `UnassignerId`<sup>Required</sup> <a name="UnassignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.unassignerId"></a>

```go
func UnassignerId() *string
```

- *Type:* *string

---

##### `ValidateAssignmentTrigger`<sup>Required</sup> <a name="ValidateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.validateAssignmentTrigger"></a>

```go
func ValidateAssignmentTrigger() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems</a>

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.NewDataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.get"></a>

```go
func Get(index *f64) DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference <a name="DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontroloperatorcontrolassignments"

dataocioperatoraccesscontroloperatorcontrolassignments.NewDataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignments.DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection">DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection</a>

---



