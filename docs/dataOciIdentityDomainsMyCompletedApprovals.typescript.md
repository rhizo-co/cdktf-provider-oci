# `dataOciIdentityDomainsMyCompletedApprovals` Submodule <a name="`dataOciIdentityDomainsMyCompletedApprovals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyCompletedApprovals <a name="DataOciIdentityDomainsMyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals oci_identity_domains_my_completed_approvals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals(scope: Construct, id: string, config: DataOciIdentityDomainsMyCompletedApprovalsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig">DataOciIdentityDomainsMyCompletedApprovalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig">DataOciIdentityDomainsMyCompletedApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalCount">resetMyCompletedApprovalCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalFilter">resetMyCompletedApprovalFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMyCompletedApprovalCount` <a name="resetMyCompletedApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalCount"></a>

```typescript
public resetMyCompletedApprovalCount(): void
```

##### `resetMyCompletedApprovalFilter` <a name="resetMyCompletedApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalFilter"></a>

```typescript
public resetMyCompletedApprovalFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyCompletedApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyCompletedApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyCompletedApprovals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyCompletedApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyCompletedApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovals">myCompletedApprovals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCountInput">myCompletedApprovalCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilterInput">myCompletedApprovalFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCount">myCompletedApprovalCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilter">myCompletedApprovalFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `myCompletedApprovals`<sup>Required</sup> <a name="myCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovals"></a>

```typescript
public readonly myCompletedApprovals: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `myCompletedApprovalCountInput`<sup>Optional</sup> <a name="myCompletedApprovalCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCountInput"></a>

```typescript
public readonly myCompletedApprovalCountInput: number;
```

- *Type:* number

---

##### `myCompletedApprovalFilterInput`<sup>Optional</sup> <a name="myCompletedApprovalFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilterInput"></a>

```typescript
public readonly myCompletedApprovalFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `myCompletedApprovalCount`<sup>Required</sup> <a name="myCompletedApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCount"></a>

```typescript
public readonly myCompletedApprovalCount: number;
```

- *Type:* number

---

##### `myCompletedApprovalFilter`<sup>Required</sup> <a name="myCompletedApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilter"></a>

```typescript
public readonly myCompletedApprovalFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyCompletedApprovalsConfig <a name="DataOciIdentityDomainsMyCompletedApprovalsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCompletedApprovalsConfig: dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalCount">myCompletedApprovalCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalFilter">myCompletedApprovalFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `myCompletedApprovalCount`<sup>Optional</sup> <a name="myCompletedApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalCount"></a>

```typescript
public readonly myCompletedApprovalCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}.

---

##### `myCompletedApprovalFilter`<sup>Optional</sup> <a name="myCompletedApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalFilter"></a>

```typescript
public readonly myCompletedApprovalFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}.

---

### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals: dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals = { ... }
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy: dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy: dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta: dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta = { ... }
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags: dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.expires">expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.myCompletedApprovalId">myCompletedApprovalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestCreatedTime">requestCreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestDetails">requestDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestId">requestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestOcid">requestOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceDisplayName">resourceDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.responseTime">responseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `expires`<sup>Required</sup> <a name="expires" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `justification`<sup>Required</sup> <a name="justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList</a>

---

##### `myCompletedApprovalId`<sup>Required</sup> <a name="myCompletedApprovalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.myCompletedApprovalId"></a>

```typescript
public readonly myCompletedApprovalId: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `requestCreatedTime`<sup>Required</sup> <a name="requestCreatedTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestCreatedTime"></a>

```typescript
public readonly requestCreatedTime: string;
```

- *Type:* string

---

##### `requestDetails`<sup>Required</sup> <a name="requestDetails" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestDetails"></a>

```typescript
public readonly requestDetails: string;
```

- *Type:* string

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

---

##### `requestOcid`<sup>Required</sup> <a name="requestOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestOcid"></a>

```typescript
public readonly requestOcid: string;
```

- *Type:* string

---

##### `resourceDisplayName`<sup>Required</sup> <a name="resourceDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceDisplayName"></a>

```typescript
public readonly resourceDisplayName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `responseTime`<sup>Required</sup> <a name="responseTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.responseTime"></a>

```typescript
public readonly responseTime: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyCompletedApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags</a>

---



