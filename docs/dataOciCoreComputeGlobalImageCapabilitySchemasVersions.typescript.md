# `dataOciCoreComputeGlobalImageCapabilitySchemasVersions` Submodule <a name="`dataOciCoreComputeGlobalImageCapabilitySchemasVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasVersions <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions oci_core_compute_global_image_capability_schemas_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions(scope: Construct, id: string, config: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeGlobalImageCapabilitySchemasVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isConstruct"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformElement"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformDataSource"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreComputeGlobalImageCapabilitySchemasVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeGlobalImageCapabilitySchemasVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeGlobalImageCapabilitySchemasVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeGlobalImageCapabilitySchemasVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaVersions">computeGlobalImageCapabilitySchemaVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaIdInput">computeGlobalImageCapabilitySchemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaId">computeGlobalImageCapabilitySchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `computeGlobalImageCapabilitySchemaVersions`<sup>Required</sup> <a name="computeGlobalImageCapabilitySchemaVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaVersions"></a>

```typescript
public readonly computeGlobalImageCapabilitySchemaVersions: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.filter"></a>

```typescript
public readonly filter: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList</a>

---

##### `computeGlobalImageCapabilitySchemaIdInput`<sup>Optional</sup> <a name="computeGlobalImageCapabilitySchemaIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaIdInput"></a>

```typescript
public readonly computeGlobalImageCapabilitySchemaIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `computeGlobalImageCapabilitySchemaId`<sup>Required</sup> <a name="computeGlobalImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.computeGlobalImageCapabilitySchemaId"></a>

```typescript
public readonly computeGlobalImageCapabilitySchemaId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions: dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions = { ... }
```


### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig: dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.computeGlobalImageCapabilitySchemaId">computeGlobalImageCapabilitySchemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#compute_global_image_capability_schema_id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#compute_global_image_capability_schema_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#display_name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeGlobalImageCapabilitySchemaId`<sup>Required</sup> <a name="computeGlobalImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.computeGlobalImageCapabilitySchemaId"></a>

```typescript
public readonly computeGlobalImageCapabilitySchemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#compute_global_image_capability_schema_id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#compute_global_image_capability_schema_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#display_name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#filter DataOciCoreComputeGlobalImageCapabilitySchemasVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter: dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#values DataOciCoreComputeGlobalImageCapabilitySchemasVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#regex DataOciCoreComputeGlobalImageCapabilitySchemasVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#values DataOciCoreComputeGlobalImageCapabilitySchemasVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#regex DataOciCoreComputeGlobalImageCapabilitySchemasVersions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.computeGlobalImageCapabilitySchemaId">computeGlobalImageCapabilitySchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.schemaData">schemaData</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeGlobalImageCapabilitySchemaId`<sup>Required</sup> <a name="computeGlobalImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.computeGlobalImageCapabilitySchemaId"></a>

```typescript
public readonly computeGlobalImageCapabilitySchemaId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schemaData`<sup>Required</sup> <a name="schemaData" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.schemaData"></a>

```typescript
public readonly schemaData: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions</a>

---


### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>[]

---


### DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference <a name="DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemasVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemasVersions.DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter">DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter</a>

---



