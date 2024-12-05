# `dataOciCapacityManagementNamespaceOccOverviews` Submodule <a name="`dataOciCapacityManagementNamespaceOccOverviews` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementNamespaceOccOverviews <a name="DataOciCapacityManagementNamespaceOccOverviews" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews oci_capacity_management_namespace_occ_overviews}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews(scope: Construct, id: string, config: DataOciCapacityManagementNamespaceOccOverviewsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig">DataOciCapacityManagementNamespaceOccOverviewsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig">DataOciCapacityManagementNamespaceOccOverviewsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetTo">resetTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCapacityManagementNamespaceOccOverviewsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter">DataOciCapacityManagementNamespaceOccOverviewsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFrom` <a name="resetFrom" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTo` <a name="resetTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetTo"></a>

```typescript
public resetTo(): void
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetWorkloadType"></a>

```typescript
public resetWorkloadType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementNamespaceOccOverviews resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCapacityManagementNamespaceOccOverviews resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementNamespaceOccOverviews to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementNamespaceOccOverviews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementNamespaceOccOverviews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList">DataOciCapacityManagementNamespaceOccOverviewsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.occOverviewCollection">occOverviewCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter">DataOciCapacityManagementNamespaceOccOverviewsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.toInput">toInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadTypeInput">workloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filter"></a>

```typescript
public readonly filter: DataOciCapacityManagementNamespaceOccOverviewsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList">DataOciCapacityManagementNamespaceOccOverviewsFilterList</a>

---

##### `occOverviewCollection`<sup>Required</sup> <a name="occOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.occOverviewCollection"></a>

```typescript
public readonly occOverviewCollection: DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCapacityManagementNamespaceOccOverviewsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter">DataOciCapacityManagementNamespaceOccOverviewsFilter</a>[]

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.toInput"></a>

```typescript
public readonly toInput: string;
```

- *Type:* string

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadTypeInput"></a>

```typescript
public readonly workloadTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementNamespaceOccOverviewsConfig <a name="DataOciCapacityManagementNamespaceOccOverviewsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementNamespaceOccOverviewsConfig: dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#compartment_id DataOciCapacityManagementNamespaceOccOverviews#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#namespace DataOciCapacityManagementNamespaceOccOverviews#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter">DataOciCapacityManagementNamespaceOccOverviewsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#from DataOciCapacityManagementNamespaceOccOverviews#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#id DataOciCapacityManagementNamespaceOccOverviews#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.to">to</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#to DataOciCapacityManagementNamespaceOccOverviews#to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.workloadType">workloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#workload_type DataOciCapacityManagementNamespaceOccOverviews#workload_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#compartment_id DataOciCapacityManagementNamespaceOccOverviews#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#namespace DataOciCapacityManagementNamespaceOccOverviews#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCapacityManagementNamespaceOccOverviewsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter">DataOciCapacityManagementNamespaceOccOverviewsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#filter DataOciCapacityManagementNamespaceOccOverviews#filter}

---

##### `from`<sup>Optional</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#from DataOciCapacityManagementNamespaceOccOverviews#from}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#id DataOciCapacityManagementNamespaceOccOverviews#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `to`<sup>Optional</sup> <a name="to" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#to DataOciCapacityManagementNamespaceOccOverviews#to}.

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#workload_type DataOciCapacityManagementNamespaceOccOverviews#workload_type}.

---

### DataOciCapacityManagementNamespaceOccOverviewsFilter <a name="DataOciCapacityManagementNamespaceOccOverviewsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementNamespaceOccOverviewsFilter: dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#name DataOciCapacityManagementNamespaceOccOverviews#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#values DataOciCapacityManagementNamespaceOccOverviews#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#regex DataOciCapacityManagementNamespaceOccOverviews#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#name DataOciCapacityManagementNamespaceOccOverviews#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#values DataOciCapacityManagementNamespaceOccOverviews#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#regex DataOciCapacityManagementNamespaceOccOverviews#regex}.

---

### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection: dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection = { ... }
```


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems: dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementNamespaceOccOverviewsFilterList <a name="DataOciCapacityManagementNamespaceOccOverviewsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter">DataOciCapacityManagementNamespaceOccOverviewsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementNamespaceOccOverviewsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter">DataOciCapacityManagementNamespaceOccOverviewsFilter</a>[]

---


### DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference <a name="DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter">DataOciCapacityManagementNamespaceOccOverviewsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementNamespaceOccOverviewsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter">DataOciCapacityManagementNamespaceOccOverviewsFilter</a>

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob">capacityRequestsBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue">periodValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable">totalAvailable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled">totalCancelled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded">totalDemanded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected">totalRejected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied">totalSupplied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled">totalUnfulfilled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob">workloadTypeBreakdownBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityRequestsBlob`<sup>Required</sup> <a name="capacityRequestsBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob"></a>

```typescript
public readonly capacityRequestsBlob: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `periodValue`<sup>Required</sup> <a name="periodValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue"></a>

```typescript
public readonly periodValue: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `totalAvailable`<sup>Required</sup> <a name="totalAvailable" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable"></a>

```typescript
public readonly totalAvailable: string;
```

- *Type:* string

---

##### `totalCancelled`<sup>Required</sup> <a name="totalCancelled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled"></a>

```typescript
public readonly totalCancelled: string;
```

- *Type:* string

---

##### `totalDemanded`<sup>Required</sup> <a name="totalDemanded" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded"></a>

```typescript
public readonly totalDemanded: string;
```

- *Type:* string

---

##### `totalRejected`<sup>Required</sup> <a name="totalRejected" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected"></a>

```typescript
public readonly totalRejected: string;
```

- *Type:* string

---

##### `totalSupplied`<sup>Required</sup> <a name="totalSupplied" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied"></a>

```typescript
public readonly totalSupplied: string;
```

- *Type:* string

---

##### `totalUnfulfilled`<sup>Required</sup> <a name="totalUnfulfilled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled"></a>

```typescript
public readonly totalUnfulfilled: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `workloadTypeBreakdownBlob`<sup>Required</sup> <a name="workloadTypeBreakdownBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob"></a>

```typescript
public readonly workloadTypeBreakdownBlob: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems</a>

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementNamespaceOccOverviews } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection</a>

---



