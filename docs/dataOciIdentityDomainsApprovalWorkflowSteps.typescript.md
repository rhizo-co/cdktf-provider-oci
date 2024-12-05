# `dataOciIdentityDomainsApprovalWorkflowSteps` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowSteps` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowSteps <a name="DataOciIdentityDomainsApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps oci_identity_domains_approval_workflow_steps}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps(scope: Construct, id: string, config: DataOciIdentityDomainsApprovalWorkflowStepsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig">DataOciIdentityDomainsApprovalWorkflowStepsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig">DataOciIdentityDomainsApprovalWorkflowStepsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepCount">resetApprovalWorkflowStepCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepFilter">resetApprovalWorkflowStepFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApprovalWorkflowStepCount` <a name="resetApprovalWorkflowStepCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepCount"></a>

```typescript
public resetApprovalWorkflowStepCount(): void
```

##### `resetApprovalWorkflowStepFilter` <a name="resetApprovalWorkflowStepFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepFilter"></a>

```typescript
public resetApprovalWorkflowStepFilter(): void
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowSteps resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowSteps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowSteps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsApprovalWorkflowSteps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowSteps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowSteps">approvalWorkflowSteps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCountInput">approvalWorkflowStepCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilterInput">approvalWorkflowStepFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCount">approvalWorkflowStepCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilter">approvalWorkflowStepFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `approvalWorkflowSteps`<sup>Required</sup> <a name="approvalWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowSteps"></a>

```typescript
public readonly approvalWorkflowSteps: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `approvalWorkflowStepCountInput`<sup>Optional</sup> <a name="approvalWorkflowStepCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCountInput"></a>

```typescript
public readonly approvalWorkflowStepCountInput: number;
```

- *Type:* number

---

##### `approvalWorkflowStepFilterInput`<sup>Optional</sup> <a name="approvalWorkflowStepFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilterInput"></a>

```typescript
public readonly approvalWorkflowStepFilterInput: string;
```

- *Type:* string

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `approvalWorkflowStepCount`<sup>Required</sup> <a name="approvalWorkflowStepCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCount"></a>

```typescript
public readonly approvalWorkflowStepCount: number;
```

- *Type:* number

---

##### `approvalWorkflowStepFilter`<sup>Required</sup> <a name="approvalWorkflowStepFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilter"></a>

```typescript
public readonly approvalWorkflowStepFilter: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps: dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers: dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy: dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy: dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta: dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags: dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags = { ... }
```


### DataOciIdentityDomainsApprovalWorkflowStepsConfig <a name="DataOciIdentityDomainsApprovalWorkflowStepsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsApprovalWorkflowStepsConfig: dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowSteps#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepCount">approvalWorkflowStepCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_count DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepFilter">approvalWorkflowStepFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_filter DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attributes DataOciIdentityDomainsApprovalWorkflowSteps#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attribute_sets DataOciIdentityDomainsApprovalWorkflowSteps#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#authorization DataOciIdentityDomainsApprovalWorkflowSteps#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#compartment_id DataOciIdentityDomainsApprovalWorkflowSteps#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#id DataOciIdentityDomainsApprovalWorkflowSteps#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowSteps#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_by DataOciIdentityDomainsApprovalWorkflowSteps#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_order DataOciIdentityDomainsApprovalWorkflowSteps#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#start_index DataOciIdentityDomainsApprovalWorkflowSteps#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowSteps#idcs_endpoint}.

---

##### `approvalWorkflowStepCount`<sup>Optional</sup> <a name="approvalWorkflowStepCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepCount"></a>

```typescript
public readonly approvalWorkflowStepCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_count DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_count}.

---

##### `approvalWorkflowStepFilter`<sup>Optional</sup> <a name="approvalWorkflowStepFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepFilter"></a>

```typescript
public readonly approvalWorkflowStepFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_filter DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_filter}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attributes DataOciIdentityDomainsApprovalWorkflowSteps#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attribute_sets DataOciIdentityDomainsApprovalWorkflowSteps#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#authorization DataOciIdentityDomainsApprovalWorkflowSteps#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#compartment_id DataOciIdentityDomainsApprovalWorkflowSteps#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#id DataOciIdentityDomainsApprovalWorkflowSteps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowSteps#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_by DataOciIdentityDomainsApprovalWorkflowSteps#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_order DataOciIdentityDomainsApprovalWorkflowSteps#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#start_index DataOciIdentityDomainsApprovalWorkflowSteps#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approvers">approvers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approversExpressions">approversExpressions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.minimumApprovals">minimumApprovals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approvers"></a>

```typescript
public readonly approvers: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList</a>

---

##### `approversExpressions`<sup>Required</sup> <a name="approversExpressions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approversExpressions"></a>

```typescript
public readonly approversExpressions: string[];
```

- *Type:* string[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList</a>

---

##### `minimumApprovals`<sup>Required</sup> <a name="minimumApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.minimumApprovals"></a>

```typescript
public readonly minimumApprovals: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsApprovalWorkflowSteps } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags</a>

---



