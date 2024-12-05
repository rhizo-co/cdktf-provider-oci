# `dataOciDataSafeAuditArchiveRetrievals` Submodule <a name="`dataOciDataSafeAuditArchiveRetrievals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditArchiveRetrievals <a name="DataOciDataSafeAuditArchiveRetrievals" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals oci_data_safe_audit_archive_retrievals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals(scope: Construct, id: string, config: DataOciDataSafeAuditArchiveRetrievalsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig">DataOciDataSafeAuditArchiveRetrievalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig">DataOciDataSafeAuditArchiveRetrievalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAuditArchiveRetrievalId">resetAuditArchiveRetrievalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTimeOfExpiry">resetTimeOfExpiry</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeAuditArchiveRetrievalsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetAuditArchiveRetrievalId` <a name="resetAuditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAuditArchiveRetrievalId"></a>

```typescript
public resetAuditArchiveRetrievalId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeOfExpiry` <a name="resetTimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTimeOfExpiry"></a>

```typescript
public resetTimeOfExpiry(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrievals resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrievals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditArchiveRetrievals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditArchiveRetrievals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditArchiveRetrievals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalCollection">auditArchiveRetrievalCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList">DataOciDataSafeAuditArchiveRetrievalsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalIdInput">auditArchiveRetrievalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiryInput">timeOfExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalId">auditArchiveRetrievalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiry">timeOfExpiry</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `auditArchiveRetrievalCollection`<sup>Required</sup> <a name="auditArchiveRetrievalCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalCollection"></a>

```typescript
public readonly auditArchiveRetrievalCollection: DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeAuditArchiveRetrievalsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList">DataOciDataSafeAuditArchiveRetrievalsFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `auditArchiveRetrievalIdInput`<sup>Optional</sup> <a name="auditArchiveRetrievalIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalIdInput"></a>

```typescript
public readonly auditArchiveRetrievalIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeAuditArchiveRetrievalsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeOfExpiryInput`<sup>Optional</sup> <a name="timeOfExpiryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiryInput"></a>

```typescript
public readonly timeOfExpiryInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `auditArchiveRetrievalId`<sup>Required</sup> <a name="auditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalId"></a>

```typescript
public readonly auditArchiveRetrievalId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeOfExpiry`<sup>Required</sup> <a name="timeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiry"></a>

```typescript
public readonly timeOfExpiry: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection: dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection = { ... }
```


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems: dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems = { ... }
```


### DataOciDataSafeAuditArchiveRetrievalsConfig <a name="DataOciDataSafeAuditArchiveRetrievalsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditArchiveRetrievalsConfig: dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.auditArchiveRetrievalId">auditArchiveRetrievalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.timeOfExpiry">timeOfExpiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}.

---

##### `auditArchiveRetrievalId`<sup>Optional</sup> <a name="auditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.auditArchiveRetrievalId"></a>

```typescript
public readonly auditArchiveRetrievalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeAuditArchiveRetrievalsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#filter DataOciDataSafeAuditArchiveRetrievals#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}.

---

##### `timeOfExpiry`<sup>Optional</sup> <a name="timeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.timeOfExpiry"></a>

```typescript
public readonly timeOfExpiry: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}.

---

### DataOciDataSafeAuditArchiveRetrievalsFilter <a name="DataOciDataSafeAuditArchiveRetrievalsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditArchiveRetrievalsFilter: dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#name DataOciDataSafeAuditArchiveRetrievals#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#values DataOciDataSafeAuditArchiveRetrievals#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#regex DataOciDataSafeAuditArchiveRetrievals#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#name DataOciDataSafeAuditArchiveRetrievals#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#values DataOciDataSafeAuditArchiveRetrievals#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#regex DataOciDataSafeAuditArchiveRetrievals#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.auditEventCount">auditEventCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.errorInfo">errorInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeCompleted">timeCompleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeOfExpiry">timeOfExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeRequested">timeRequested</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditEventCount`<sup>Required</sup> <a name="auditEventCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.auditEventCount"></a>

```typescript
public readonly auditEventCount: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.errorInfo"></a>

```typescript
public readonly errorInfo: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCompleted`<sup>Required</sup> <a name="timeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeCompleted"></a>

```typescript
public readonly timeCompleted: string;
```

- *Type:* string

---

##### `timeOfExpiry`<sup>Required</sup> <a name="timeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeOfExpiry"></a>

```typescript
public readonly timeOfExpiry: string;
```

- *Type:* string

---

##### `timeRequested`<sup>Required</sup> <a name="timeRequested" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeRequested"></a>

```typescript
public readonly timeRequested: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems</a>

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection</a>

---


### DataOciDataSafeAuditArchiveRetrievalsFilterList <a name="DataOciDataSafeAuditArchiveRetrievalsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeAuditArchiveRetrievalsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>[]

---


### DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditArchiveRetrievals } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeAuditArchiveRetrievalsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter">DataOciDataSafeAuditArchiveRetrievalsFilter</a>

---



