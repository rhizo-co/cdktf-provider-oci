# `dataOciOsManagementHubLifecycleEnvironment` Submodule <a name="`dataOciOsManagementHubLifecycleEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubLifecycleEnvironment <a name="DataOciOsManagementHubLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environment oci_os_management_hub_lifecycle_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment(scope: Construct, id: string, config: DataOciOsManagementHubLifecycleEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig">DataOciOsManagementHubLifecycleEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig">DataOciOsManagementHubLifecycleEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubLifecycleEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isConstruct"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubLifecycleEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubLifecycleEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubLifecycleEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubLifecycleEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.managedInstanceIds">managedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList">DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.stages">stages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList">DataOciOsManagementHubLifecycleEnvironmentStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.vendorName">vendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.lifecycleEnvironmentIdInput">lifecycleEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.lifecycleEnvironmentId">lifecycleEnvironmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedInstanceIds`<sup>Required</sup> <a name="managedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.managedInstanceIds"></a>

```typescript
public readonly managedInstanceIds: DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList">DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList</a>

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.stages"></a>

```typescript
public readonly stages: DataOciOsManagementHubLifecycleEnvironmentStagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList">DataOciOsManagementHubLifecycleEnvironmentStagesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

---

##### `lifecycleEnvironmentIdInput`<sup>Optional</sup> <a name="lifecycleEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.lifecycleEnvironmentIdInput"></a>

```typescript
public readonly lifecycleEnvironmentIdInput: string;
```

- *Type:* string

---

##### `lifecycleEnvironmentId`<sup>Required</sup> <a name="lifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.lifecycleEnvironmentId"></a>

```typescript
public readonly lifecycleEnvironmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubLifecycleEnvironmentConfig <a name="DataOciOsManagementHubLifecycleEnvironmentConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentConfig: dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.lifecycleEnvironmentId">lifecycleEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environment#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironment#lifecycle_environment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleEnvironmentId`<sup>Required</sup> <a name="lifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentConfig.property.lifecycleEnvironmentId"></a>

```typescript
public readonly lifecycleEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environment#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironment#lifecycle_environment_id}.

---

### DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds <a name="DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds: dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds = { ... }
```


### DataOciOsManagementHubLifecycleEnvironmentStages <a name="DataOciOsManagementHubLifecycleEnvironmentStages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStages.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentStages: dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStages = { ... }
```


### DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds <a name="DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds: dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds = { ... }
```


### DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId <a name="DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId: dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList <a name="DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds">DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds">DataOciOsManagementHubLifecycleEnvironmentManagedInstanceIds</a>

---


### DataOciOsManagementHubLifecycleEnvironmentStagesList <a name="DataOciOsManagementHubLifecycleEnvironmentStagesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList <a name="DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds">DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds">DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIds</a>

---


### DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.lifecycleEnvironmentId">lifecycleEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.managedInstanceIds">managedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList">DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.rank">rank</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList">DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.vendorName">vendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStages">DataOciOsManagementHubLifecycleEnvironmentStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleEnvironmentId`<sup>Required</sup> <a name="lifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.lifecycleEnvironmentId"></a>

```typescript
public readonly lifecycleEnvironmentId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedInstanceIds`<sup>Required</sup> <a name="managedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.managedInstanceIds"></a>

```typescript
public readonly managedInstanceIds: DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList">DataOciOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList</a>

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `rank`<sup>Required</sup> <a name="rank" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.rank"></a>

```typescript
public readonly rank: number;
```

- *Type:* number

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList">DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleEnvironmentStages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStages">DataOciOsManagementHubLifecycleEnvironmentStages</a>

---


### DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList <a name="DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId">DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux"></a>

```typescript
public readonly isMandatoryForAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.softwareSourceType"></a>

```typescript
public readonly softwareSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironment.DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId">DataOciOsManagementHubLifecycleEnvironmentStagesSoftwareSourceId</a>

---



