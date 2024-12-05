# `dataOciIdentityDomainsMyPendingApprovals` Submodule <a name="`dataOciIdentityDomainsMyPendingApprovals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyPendingApprovals <a name="DataOciIdentityDomainsMyPendingApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals oci_identity_domains_my_pending_approvals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals(scope: Construct, id: string, config: DataOciIdentityDomainsMyPendingApprovalsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig">DataOciIdentityDomainsMyPendingApprovalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig">DataOciIdentityDomainsMyPendingApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetMyPendingApprovalCount">resetMyPendingApprovalCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetMyPendingApprovalFilter">resetMyPendingApprovalFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMyPendingApprovalCount` <a name="resetMyPendingApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetMyPendingApprovalCount"></a>

```typescript
public resetMyPendingApprovalCount(): void
```

##### `resetMyPendingApprovalFilter` <a name="resetMyPendingApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetMyPendingApprovalFilter"></a>

```typescript
public resetMyPendingApprovalFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyPendingApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyPendingApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyPendingApprovals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyPendingApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyPendingApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovals">myPendingApprovals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalCountInput">myPendingApprovalCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalFilterInput">myPendingApprovalFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalCount">myPendingApprovalCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalFilter">myPendingApprovalFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `myPendingApprovals`<sup>Required</sup> <a name="myPendingApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovals"></a>

```typescript
public readonly myPendingApprovals: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `myPendingApprovalCountInput`<sup>Optional</sup> <a name="myPendingApprovalCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalCountInput"></a>

```typescript
public readonly myPendingApprovalCountInput: number;
```

- *Type:* number

---

##### `myPendingApprovalFilterInput`<sup>Optional</sup> <a name="myPendingApprovalFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalFilterInput"></a>

```typescript
public readonly myPendingApprovalFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `myPendingApprovalCount`<sup>Required</sup> <a name="myPendingApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalCount"></a>

```typescript
public readonly myPendingApprovalCount: number;
```

- *Type:* number

---

##### `myPendingApprovalFilter`<sup>Required</sup> <a name="myPendingApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.myPendingApprovalFilter"></a>

```typescript
public readonly myPendingApprovalFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovals.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyPendingApprovalsConfig <a name="DataOciIdentityDomainsMyPendingApprovalsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyPendingApprovalsConfig: dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#idcs_endpoint DataOciIdentityDomainsMyPendingApprovals#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#authorization DataOciIdentityDomainsMyPendingApprovals#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#compartment_id DataOciIdentityDomainsMyPendingApprovals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#id DataOciIdentityDomainsMyPendingApprovals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.myPendingApprovalCount">myPendingApprovalCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#my_pending_approval_count DataOciIdentityDomainsMyPendingApprovals#my_pending_approval_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.myPendingApprovalFilter">myPendingApprovalFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#my_pending_approval_filter DataOciIdentityDomainsMyPendingApprovals#my_pending_approval_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#resource_type_schema_version DataOciIdentityDomainsMyPendingApprovals#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#sort_by DataOciIdentityDomainsMyPendingApprovals#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#sort_order DataOciIdentityDomainsMyPendingApprovals#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#start_index DataOciIdentityDomainsMyPendingApprovals#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#idcs_endpoint DataOciIdentityDomainsMyPendingApprovals#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#authorization DataOciIdentityDomainsMyPendingApprovals#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#compartment_id DataOciIdentityDomainsMyPendingApprovals#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#id DataOciIdentityDomainsMyPendingApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `myPendingApprovalCount`<sup>Optional</sup> <a name="myPendingApprovalCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.myPendingApprovalCount"></a>

```typescript
public readonly myPendingApprovalCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#my_pending_approval_count DataOciIdentityDomainsMyPendingApprovals#my_pending_approval_count}.

---

##### `myPendingApprovalFilter`<sup>Optional</sup> <a name="myPendingApprovalFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.myPendingApprovalFilter"></a>

```typescript
public readonly myPendingApprovalFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#my_pending_approval_filter DataOciIdentityDomainsMyPendingApprovals#my_pending_approval_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#resource_type_schema_version DataOciIdentityDomainsMyPendingApprovals#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#sort_by DataOciIdentityDomainsMyPendingApprovals#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#sort_order DataOciIdentityDomainsMyPendingApprovals#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_pending_approvals#start_index DataOciIdentityDomainsMyPendingApprovals#start_index}.

---

### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals: dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals = { ... }
```


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy: dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy: dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta: dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta = { ... }
```


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags: dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMeta</a>

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.expires">expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.myPendingApprovalId">myPendingApprovalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestCreatedTime">requestCreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestDetails">requestDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestId">requestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestOcid">requestOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceDisplayName">resourceDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.responseTime">responseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `expires`<sup>Required</sup> <a name="expires" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `justification`<sup>Required</sup> <a name="justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsMetaList</a>

---

##### `myPendingApprovalId`<sup>Required</sup> <a name="myPendingApprovalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.myPendingApprovalId"></a>

```typescript
public readonly myPendingApprovalId: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `requestCreatedTime`<sup>Required</sup> <a name="requestCreatedTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestCreatedTime"></a>

```typescript
public readonly requestCreatedTime: string;
```

- *Type:* string

---

##### `requestDetails`<sup>Required</sup> <a name="requestDetails" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestDetails"></a>

```typescript
public readonly requestDetails: string;
```

- *Type:* string

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

---

##### `requestOcid`<sup>Required</sup> <a name="requestOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.requestOcid"></a>

```typescript
public readonly requestOcid: string;
```

- *Type:* string

---

##### `resourceDisplayName`<sup>Required</sup> <a name="resourceDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceDisplayName"></a>

```typescript
public readonly resourceDisplayName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `responseTime`<sup>Required</sup> <a name="responseTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.responseTime"></a>

```typescript
public readonly responseTime: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovals</a>

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference <a name="DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyPendingApprovals } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyPendingApprovals.DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags">DataOciIdentityDomainsMyPendingApprovalsMyPendingApprovalsTags</a>

---



