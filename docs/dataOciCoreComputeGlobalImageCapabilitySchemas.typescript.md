# `dataOciCoreComputeGlobalImageCapabilitySchemas` Submodule <a name="`dataOciCoreComputeGlobalImageCapabilitySchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemas <a name="DataOciCoreComputeGlobalImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas oci_core_compute_global_image_capability_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas(scope: Construct, id: string, config?: DataOciCoreComputeGlobalImageCapabilitySchemasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig">DataOciCoreComputeGlobalImageCapabilitySchemasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig">DataOciCoreComputeGlobalImageCapabilitySchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter">DataOciCoreComputeGlobalImageCapabilitySchemasFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeGlobalImageCapabilitySchemas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isConstruct"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformElement"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformDataSource"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreComputeGlobalImageCapabilitySchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeGlobalImageCapabilitySchemas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeGlobalImageCapabilitySchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeGlobalImageCapabilitySchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.computeGlobalImageCapabilitySchemas">computeGlobalImageCapabilitySchemas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList">DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList">DataOciCoreComputeGlobalImageCapabilitySchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter">DataOciCoreComputeGlobalImageCapabilitySchemasFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `computeGlobalImageCapabilitySchemas`<sup>Required</sup> <a name="computeGlobalImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.computeGlobalImageCapabilitySchemas"></a>

```typescript
public readonly computeGlobalImageCapabilitySchemas: DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList">DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.filter"></a>

```typescript
public readonly filter: DataOciCoreComputeGlobalImageCapabilitySchemasFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList">DataOciCoreComputeGlobalImageCapabilitySchemasFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter">DataOciCoreComputeGlobalImageCapabilitySchemasFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemas.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas <a name="DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas: dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas = { ... }
```


### DataOciCoreComputeGlobalImageCapabilitySchemasConfig <a name="DataOciCoreComputeGlobalImageCapabilitySchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeGlobalImageCapabilitySchemasConfig: dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#compartment_id DataOciCoreComputeGlobalImageCapabilitySchemas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#display_name DataOciCoreComputeGlobalImageCapabilitySchemas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter">DataOciCoreComputeGlobalImageCapabilitySchemasFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#id DataOciCoreComputeGlobalImageCapabilitySchemas#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#compartment_id DataOciCoreComputeGlobalImageCapabilitySchemas#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#display_name DataOciCoreComputeGlobalImageCapabilitySchemas#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter">DataOciCoreComputeGlobalImageCapabilitySchemasFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#filter DataOciCoreComputeGlobalImageCapabilitySchemas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#id DataOciCoreComputeGlobalImageCapabilitySchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeGlobalImageCapabilitySchemasFilter <a name="DataOciCoreComputeGlobalImageCapabilitySchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeGlobalImageCapabilitySchemasFilter: dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#name DataOciCoreComputeGlobalImageCapabilitySchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#values DataOciCoreComputeGlobalImageCapabilitySchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#regex DataOciCoreComputeGlobalImageCapabilitySchemas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#name DataOciCoreComputeGlobalImageCapabilitySchemas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#values DataOciCoreComputeGlobalImageCapabilitySchemas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas#regex DataOciCoreComputeGlobalImageCapabilitySchemas#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList <a name="DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference <a name="DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.currentVersionName">currentVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas">DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `currentVersionName`<sup>Required</sup> <a name="currentVersionName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.currentVersionName"></a>

```typescript
public readonly currentVersionName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas">DataOciCoreComputeGlobalImageCapabilitySchemasComputeGlobalImageCapabilitySchemas</a>

---


### DataOciCoreComputeGlobalImageCapabilitySchemasFilterList <a name="DataOciCoreComputeGlobalImageCapabilitySchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter">DataOciCoreComputeGlobalImageCapabilitySchemasFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter">DataOciCoreComputeGlobalImageCapabilitySchemasFilter</a>[]

---


### DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference <a name="DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeGlobalImageCapabilitySchemas } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter">DataOciCoreComputeGlobalImageCapabilitySchemasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeGlobalImageCapabilitySchemasFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeGlobalImageCapabilitySchemas.DataOciCoreComputeGlobalImageCapabilitySchemasFilter">DataOciCoreComputeGlobalImageCapabilitySchemasFilter</a>

---



