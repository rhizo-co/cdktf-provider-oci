# `dataOciIdentityDomainsApprovalWorkflowAssignments` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignments <a name="DataOciIdentityDomainsApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments oci_identity_domains_approval_workflow_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignments(scope Construct, id *string, config DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig) DataOciIdentityDomainsApprovalWorkflowAssignments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig">DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig">DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentCount">ResetApprovalWorkflowAssignmentCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentFilter">ResetApprovalWorkflowAssignmentFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetApprovalWorkflowAssignmentCount` <a name="ResetApprovalWorkflowAssignmentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentCount"></a>

```go
func ResetApprovalWorkflowAssignmentCount()
```

##### `ResetApprovalWorkflowAssignmentFilter` <a name="ResetApprovalWorkflowAssignmentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentFilter"></a>

```go
func ResetApprovalWorkflowAssignmentFilter()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsApprovalWorkflowAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignments">ApprovalWorkflowAssignments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCountInput">ApprovalWorkflowAssignmentCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilterInput">ApprovalWorkflowAssignmentFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCount">ApprovalWorkflowAssignmentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilter">ApprovalWorkflowAssignmentFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApprovalWorkflowAssignments`<sup>Required</sup> <a name="ApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignments"></a>

```go
func ApprovalWorkflowAssignments() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `ApprovalWorkflowAssignmentCountInput`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCountInput"></a>

```go
func ApprovalWorkflowAssignmentCountInput() *f64
```

- *Type:* *f64

---

##### `ApprovalWorkflowAssignmentFilterInput`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilterInput"></a>

```go
func ApprovalWorkflowAssignmentFilterInput() *string
```

- *Type:* *string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `ApprovalWorkflowAssignmentCount`<sup>Required</sup> <a name="ApprovalWorkflowAssignmentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCount"></a>

```go
func ApprovalWorkflowAssignmentCount() *f64
```

- *Type:* *f64

---

##### `ApprovalWorkflowAssignmentFilter`<sup>Required</sup> <a name="ApprovalWorkflowAssignmentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilter"></a>

```go
func ApprovalWorkflowAssignmentFilter() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

&dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

&dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

&dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

&dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

&dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

&dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

&dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags {

}
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

&dataociidentitydomainsapprovalworkflowassignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	ApprovalWorkflowAssignmentCount: *f64,
	ApprovalWorkflowAssignmentFilter: *string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	CompartmentId: *string,
	Id: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentCount">ApprovalWorkflowAssignmentCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentFilter">ApprovalWorkflowAssignmentFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}.

---

##### `ApprovalWorkflowAssignmentCount`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentCount"></a>

```go
ApprovalWorkflowAssignmentCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}.

---

##### `ApprovalWorkflowAssignmentFilter`<sup>Optional</sup> <a name="ApprovalWorkflowAssignmentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentFilter"></a>

```go
ApprovalWorkflowAssignmentFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignedTo">AssignedTo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignmentType">AssignmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalWorkflow`<sup>Required</sup> <a name="ApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.approvalWorkflow"></a>

```go
func ApprovalWorkflow() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList</a>

---

##### `AssignedTo`<sup>Required</sup> <a name="AssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignedTo"></a>

```go
func AssignedTo() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList</a>

---

##### `AssignmentType`<sup>Required</sup> <a name="AssignmentType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignmentType"></a>

```go
func AssignmentType() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsapprovalworkflowassignments"

dataociidentitydomainsapprovalworkflowassignments.NewDataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags</a>

---



