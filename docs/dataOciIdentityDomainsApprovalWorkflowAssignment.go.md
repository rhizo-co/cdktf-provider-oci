# `dataOciIdentityDomainsApprovalWorkflowAssignment` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowAssignment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignment <a name="DataOciIdentityDomainsApprovalWorkflowAssignment" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment oci_identity_domains_approval_workflow_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignment(scope Construct, id *string, config DataOciIdentityDomainsApprovalWorkflowAssignmentConfig) DataOciIdentityDomainsApprovalWorkflowAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig">DataOciIdentityDomainsApprovalWorkflowAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
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

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsApprovalWorkflowAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.assignedTo">AssignedTo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.assignmentType">AssignmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowAssignmentIdInput">ApprovalWorkflowAssignmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowAssignmentId">ApprovalWorkflowAssignmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApprovalWorkflow`<sup>Required</sup> <a name="ApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflow"></a>

```go
func ApprovalWorkflow() DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList</a>

---

##### `AssignedTo`<sup>Required</sup> <a name="AssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.assignedTo"></a>

```go
func AssignedTo() DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList</a>

---

##### `AssignmentType`<sup>Required</sup> <a name="AssignmentType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.assignmentType"></a>

```go
func AssignmentType() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `ApprovalWorkflowAssignmentIdInput`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowAssignmentIdInput"></a>

```go
func ApprovalWorkflowAssignmentIdInput() *string
```

- *Type:* *string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `ApprovalWorkflowAssignmentId`<sup>Required</sup> <a name="ApprovalWorkflowAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.approvalWorkflowAssignmentId"></a>

```go
func ApprovalWorkflowAssignmentId() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

&dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

&dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentConfig <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

&dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApprovalWorkflowAssignmentId: *string,
	IdcsEndpoint: *string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	ResourceTypeSchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.approvalWorkflowAssignmentId">ApprovalWorkflowAssignmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#approval_workflow_assignment_id DataOciIdentityDomainsApprovalWorkflowAssignment#approval_workflow_assignment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignment#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#attributes DataOciIdentityDomainsApprovalWorkflowAssignment#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignment#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#authorization DataOciIdentityDomainsApprovalWorkflowAssignment#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignment#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalWorkflowAssignmentId`<sup>Required</sup> <a name="ApprovalWorkflowAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.approvalWorkflowAssignmentId"></a>

```go
ApprovalWorkflowAssignmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#approval_workflow_assignment_id DataOciIdentityDomainsApprovalWorkflowAssignment#approval_workflow_assignment_id}.

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignment#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#attributes DataOciIdentityDomainsApprovalWorkflowAssignment#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignment#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#authorization DataOciIdentityDomainsApprovalWorkflowAssignment#authorization}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignment#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignment#resource_type_schema_version}.

---

### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

&dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

&dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentMeta <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

&dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMeta {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentTags <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

&dataociidentitydomainsapprovalworkflowassignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentApprovalWorkflow</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedToOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentAssignedTo</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignment"

dataociidentitydomainsapprovalworkflowassignment.NewDataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTags">DataOciIdentityDomainsApprovalWorkflowAssignmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignment.DataOciIdentityDomainsApprovalWorkflowAssignmentTags">DataOciIdentityDomainsApprovalWorkflowAssignmentTags</a>

---



