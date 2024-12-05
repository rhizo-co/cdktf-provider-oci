# `dataOciIdentityDomainsApprovalWorkflowAssignments` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignments <a name="DataOciIdentityDomainsApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments oci_identity_domains_approval_workflow_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments(scope: Construct, id: string, config: DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig">DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig">DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentCount">resetApprovalWorkflowAssignmentCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentFilter">resetApprovalWorkflowAssignmentFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApprovalWorkflowAssignmentCount` <a name="resetApprovalWorkflowAssignmentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentCount"></a>

```typescript
public resetApprovalWorkflowAssignmentCount(): void
```

##### `resetApprovalWorkflowAssignmentFilter` <a name="resetApprovalWorkflowAssignmentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentFilter"></a>

```typescript
public resetApprovalWorkflowAssignmentFilter(): void
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowAssignments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsApprovalWorkflowAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignments">approvalWorkflowAssignments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCountInput">approvalWorkflowAssignmentCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilterInput">approvalWorkflowAssignmentFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCount">approvalWorkflowAssignmentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilter">approvalWorkflowAssignmentFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `approvalWorkflowAssignments`<sup>Required</sup> <a name="approvalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignments"></a>

```typescript
public readonly approvalWorkflowAssignments: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `approvalWorkflowAssignmentCountInput`<sup>Optional</sup> <a name="approvalWorkflowAssignmentCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCountInput"></a>

```typescript
public readonly approvalWorkflowAssignmentCountInput: number;
```

- *Type:* number

---

##### `approvalWorkflowAssignmentFilterInput`<sup>Optional</sup> <a name="approvalWorkflowAssignmentFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilterInput"></a>

```typescript
public readonly approvalWorkflowAssignmentFilterInput: string;
```

- *Type:* string

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `approvalWorkflowAssignmentCount`<sup>Required</sup> <a name="approvalWorkflowAssignmentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCount"></a>

```typescript
public readonly approvalWorkflowAssignmentCount: number;
```

- *Type:* number

---

##### `approvalWorkflowAssignmentFilter`<sup>Required</sup> <a name="approvalWorkflowAssignmentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilter"></a>

```typescript
public readonly approvalWorkflowAssignmentFilter: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments: dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow: dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo: dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy: dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy: dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta: dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags: dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowAssignmentsConfig: dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentCount">approvalWorkflowAssignmentCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentFilter">approvalWorkflowAssignmentFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}.

---

##### `approvalWorkflowAssignmentCount`<sup>Optional</sup> <a name="approvalWorkflowAssignmentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentCount"></a>

```typescript
public readonly approvalWorkflowAssignmentCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}.

---

##### `approvalWorkflowAssignmentFilter`<sup>Optional</sup> <a name="approvalWorkflowAssignmentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentFilter"></a>

```typescript
public readonly approvalWorkflowAssignmentFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.approvalWorkflow">approvalWorkflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignedTo">assignedTo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignmentType">assignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalWorkflow`<sup>Required</sup> <a name="approvalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.approvalWorkflow"></a>

```typescript
public readonly approvalWorkflow: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList</a>

---

##### `assignedTo`<sup>Required</sup> <a name="assignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignedTo"></a>

```typescript
public readonly assignedTo: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList</a>

---

##### `assignmentType`<sup>Required</sup> <a name="assignmentType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignmentType"></a>

```typescript
public readonly assignmentType: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowAssignments } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags</a>

---



