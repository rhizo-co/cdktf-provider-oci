# `dataOciDataSafeAuditArchiveRetrievals` Submodule <a name="`dataOciDataSafeAuditArchiveRetrievals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditArchiveRetrievals <a name="DataOciDataSafeAuditArchiveRetrievals" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals oci_data_safe_audit_archive_retrievals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.NewDataOciDataSafeAuditArchiveRetrievals(scope Construct, id *string, config DataOciDataSafeAuditArchiveRetrievalsConfig) DataOciDataSafeAuditArchiveRetrievals
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig">DataOciDataSafeAuditArchiveRetrievalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig">DataOciDataSafeAuditArchiveRetrievalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAuditArchiveRetrievalId">ResetAuditArchiveRetrievalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTimeOfExpiry">ResetTimeOfExpiry</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetAuditArchiveRetrievalId` <a name="ResetAuditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAuditArchiveRetrievalId"></a>

```go
func ResetAuditArchiveRetrievalId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetState"></a>

```go
func ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTargetId"></a>

```go
func ResetTargetId()
```

##### `ResetTimeOfExpiry` <a name="ResetTimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTimeOfExpiry"></a>

```go
func ResetTimeOfExpiry()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrievals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.DataOciDataSafeAuditArchiveRetrievals_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.DataOciDataSafeAuditArchiveRetrievals_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.DataOciDataSafeAuditArchiveRetrievals_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.DataOciDataSafeAuditArchiveRetrievals_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrievals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeAuditArchiveRetrievals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeAuditArchiveRetrievals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditArchiveRetrievals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalCollection">AuditArchiveRetrievalCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList">DataOciDataSafeAuditArchiveRetrievalsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalIdInput">AuditArchiveRetrievalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiryInput">TimeOfExpiryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalId">AuditArchiveRetrievalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiry">TimeOfExpiry</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuditArchiveRetrievalCollection`<sup>Required</sup> <a name="AuditArchiveRetrievalCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalCollection"></a>

```go
func AuditArchiveRetrievalCollection() DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filter"></a>

```go
func Filter() DataOciDataSafeAuditArchiveRetrievalsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList">DataOciDataSafeAuditArchiveRetrievalsFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `AuditArchiveRetrievalIdInput`<sup>Optional</sup> <a name="AuditArchiveRetrievalIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalIdInput"></a>

```go
func AuditArchiveRetrievalIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `TimeOfExpiryInput`<sup>Optional</sup> <a name="TimeOfExpiryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiryInput"></a>

```go
func TimeOfExpiryInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AuditArchiveRetrievalId`<sup>Required</sup> <a name="AuditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalId"></a>

```go
func AuditArchiveRetrievalId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeOfExpiry`<sup>Required</sup> <a name="TimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiry"></a>

```go
func TimeOfExpiry() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

&dataocidatasafeauditarchiveretrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection {

}
```


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

&dataocidatasafeauditarchiveretrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems {

}
```


### DataOciDataSafeAuditArchiveRetrievalsConfig <a name="DataOciDataSafeAuditArchiveRetrievalsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

&dataocidatasafeauditarchiveretrievals.DataOciDataSafeAuditArchiveRetrievalsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	AuditArchiveRetrievalId: *string,
	CompartmentIdInSubtree: interface{},
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
	TargetId: *string,
	TimeOfExpiry: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.auditArchiveRetrievalId">AuditArchiveRetrievalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.timeOfExpiry">TimeOfExpiry</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}.

---

##### `AuditArchiveRetrievalId`<sup>Optional</sup> <a name="AuditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.auditArchiveRetrievalId"></a>

```go
AuditArchiveRetrievalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#filter DataOciDataSafeAuditArchiveRetrievals#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}.

---

##### `TimeOfExpiry`<sup>Optional</sup> <a name="TimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.timeOfExpiry"></a>

```go
TimeOfExpiry *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}.

---

### DataOciDataSafeAuditArchiveRetrievalsFilter <a name="DataOciDataSafeAuditArchiveRetrievalsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

&dataocidatasafeauditarchiveretrievals.DataOciDataSafeAuditArchiveRetrievalsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#name DataOciDataSafeAuditArchiveRetrievals#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#values DataOciDataSafeAuditArchiveRetrievals#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#regex DataOciDataSafeAuditArchiveRetrievals#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#name DataOciDataSafeAuditArchiveRetrievals#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#values DataOciDataSafeAuditArchiveRetrievals#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#regex DataOciDataSafeAuditArchiveRetrievals#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.NewDataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.NewDataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.auditEventCount">AuditEventCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.errorInfo">ErrorInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeCompleted">TimeCompleted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeOfExpiry">TimeOfExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeRequested">TimeRequested</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditEventCount`<sup>Required</sup> <a name="AuditEventCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.auditEventCount"></a>

```go
func AuditEventCount() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.errorInfo"></a>

```go
func ErrorInfo() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeCompleted`<sup>Required</sup> <a name="TimeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeCompleted"></a>

```go
func TimeCompleted() *string
```

- *Type:* *string

---

##### `TimeOfExpiry`<sup>Required</sup> <a name="TimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeOfExpiry"></a>

```go
func TimeOfExpiry() *string
```

- *Type:* *string

---

##### `TimeRequested`<sup>Required</sup> <a name="TimeRequested" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeRequested"></a>

```go
func TimeRequested() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems</a>

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.NewDataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.NewDataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection</a>

---


### DataOciDataSafeAuditArchiveRetrievalsFilterList <a name="DataOciDataSafeAuditArchiveRetrievalsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.NewDataOciDataSafeAuditArchiveRetrievalsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditArchiveRetrievalsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditarchiveretrievals"

dataocidatasafeauditarchiveretrievals.NewDataOciDataSafeAuditArchiveRetrievalsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



