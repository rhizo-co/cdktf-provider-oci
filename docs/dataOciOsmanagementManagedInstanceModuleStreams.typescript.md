# `dataOciOsmanagementManagedInstanceModuleStreams` Submodule <a name="`dataOciOsmanagementManagedInstanceModuleStreams` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceModuleStreams <a name="DataOciOsmanagementManagedInstanceModuleStreams" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams oci_osmanagement_managed_instance_module_streams}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams(scope: Construct, id: string, config: DataOciOsmanagementManagedInstanceModuleStreamsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig">DataOciOsmanagementManagedInstanceModuleStreamsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig">DataOciOsmanagementManagedInstanceModuleStreamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetModuleName">resetModuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamName">resetStreamName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamStatus">resetStreamStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsmanagementManagedInstanceModuleStreamsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetId"></a>

```typescript
public resetId(): void
```

##### `resetModuleName` <a name="resetModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetModuleName"></a>

```typescript
public resetModuleName(): void
```

##### `resetStreamName` <a name="resetStreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamName"></a>

```typescript
public resetStreamName(): void
```

##### `resetStreamStatus` <a name="resetStreamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamStatus"></a>

```typescript
public resetStreamStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceModuleStreams resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceModuleStreams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceModuleStreams to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsmanagementManagedInstanceModuleStreams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceModuleStreams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList">DataOciOsmanagementManagedInstanceModuleStreamsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleStreamOnManagedInstances">moduleStreamOnManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatusInput">streamStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatus">streamStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filter"></a>

```typescript
public readonly filter: DataOciOsmanagementManagedInstanceModuleStreamsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList">DataOciOsmanagementManagedInstanceModuleStreamsFilterList</a>

---

##### `moduleStreamOnManagedInstances`<sup>Required</sup> <a name="moduleStreamOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleStreamOnManagedInstances"></a>

```typescript
public readonly moduleStreamOnManagedInstances: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsmanagementManagedInstanceModuleStreamsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `streamStatusInput`<sup>Optional</sup> <a name="streamStatusInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatusInput"></a>

```typescript
public readonly streamStatusInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `streamStatus`<sup>Required</sup> <a name="streamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatus"></a>

```typescript
public readonly streamStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceModuleStreamsConfig <a name="DataOciOsmanagementManagedInstanceModuleStreamsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstanceModuleStreamsConfig: dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamStatus">streamStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsmanagementManagedInstanceModuleStreamsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#filter DataOciOsmanagementManagedInstanceModuleStreams#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `moduleName`<sup>Optional</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}.

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}.

---

##### `streamStatus`<sup>Optional</sup> <a name="streamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamStatus"></a>

```typescript
public readonly streamStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}.

---

### DataOciOsmanagementManagedInstanceModuleStreamsFilter <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstanceModuleStreamsFilter: dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#name DataOciOsmanagementManagedInstanceModuleStreams#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#values DataOciOsmanagementManagedInstanceModuleStreams#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#regex DataOciOsmanagementManagedInstanceModuleStreams#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#name DataOciOsmanagementManagedInstanceModuleStreams#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#values DataOciOsmanagementManagedInstanceModuleStreams#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#regex DataOciOsmanagementManagedInstanceModuleStreams#regex}.

---

### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances: dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances = { ... }
```


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles: dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceModuleStreamsFilterList <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsmanagementManagedInstanceModuleStreamsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>[]

---


### DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsmanagementManagedInstanceModuleStreamsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter">DataOciOsmanagementManagedInstanceModuleStreamsFilter</a>

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.profiles"></a>

```typescript
public readonly profiles: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList</a>

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances</a>

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementManagedInstanceModuleStreams } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles</a>

---



