# `dataOciBdsBdsInstanceResourcePrincipalConfigurations` Submodule <a name="`dataOciBdsBdsInstanceResourcePrincipalConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfigurations <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations oci_bds_bds_instance_resource_principal_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations(scope: Construct, id: string, config: DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig">DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig">DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isConstruct"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformElement"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformDataSource"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstanceResourcePrincipalConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstanceResourcePrincipalConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceResourcePrincipalConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.resourcePrincipalConfigurations">resourcePrincipalConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList">DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.filter"></a>

```typescript
public readonly filter: DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList</a>

---

##### `resourcePrincipalConfigurations`<sup>Required</sup> <a name="resourcePrincipalConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.resourcePrincipalConfigurations"></a>

```typescript
public readonly resourcePrincipalConfigurations: DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList">DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList</a>

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.bdsInstanceIdInput"></a>

```typescript
public readonly bdsInstanceIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig: dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfigurations#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#display_name DataOciBdsBdsInstanceResourcePrincipalConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#id DataOciBdsBdsInstanceResourcePrincipalConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#state DataOciBdsBdsInstanceResourcePrincipalConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfigurations#bds_instance_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#display_name DataOciBdsBdsInstanceResourcePrincipalConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#filter DataOciBdsBdsInstanceResourcePrincipalConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#id DataOciBdsBdsInstanceResourcePrincipalConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#state DataOciBdsBdsInstanceResourcePrincipalConfigurations#state}.

---

### DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter: dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#name DataOciBdsBdsInstanceResourcePrincipalConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#values DataOciBdsBdsInstanceResourcePrincipalConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#regex DataOciBdsBdsInstanceResourcePrincipalConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#name DataOciBdsBdsInstanceResourcePrincipalConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#values DataOciBdsBdsInstanceResourcePrincipalConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configurations#regex DataOciBdsBdsInstanceResourcePrincipalConfigurations#regex}.

---

### DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations: dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.get"></a>

```typescript
public get(index: number): DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>[]

---


### DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter">DataOciBdsBdsInstanceResourcePrincipalConfigurationsFilter</a>

---


### DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfigurations } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.forceRefreshResourcePrincipalTrigger">forceRefreshResourcePrincipalTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.sessionTokenLifeSpanDurationInHours">sessionTokenLifeSpanDurationInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeTokenExpiry">timeTokenExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeTokenRefreshed">timeTokenRefreshed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations">DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.clusterAdminPassword"></a>

```typescript
public readonly clusterAdminPassword: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `forceRefreshResourcePrincipalTrigger`<sup>Required</sup> <a name="forceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.forceRefreshResourcePrincipalTrigger"></a>

```typescript
public readonly forceRefreshResourcePrincipalTrigger: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sessionTokenLifeSpanDurationInHours`<sup>Required</sup> <a name="sessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.sessionTokenLifeSpanDurationInHours"></a>

```typescript
public readonly sessionTokenLifeSpanDurationInHours: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeTokenExpiry`<sup>Required</sup> <a name="timeTokenExpiry" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeTokenExpiry"></a>

```typescript
public readonly timeTokenExpiry: string;
```

- *Type:* string

---

##### `timeTokenRefreshed`<sup>Required</sup> <a name="timeTokenRefreshed" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeTokenRefreshed"></a>

```typescript
public readonly timeTokenRefreshed: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfigurations.DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations">DataOciBdsBdsInstanceResourcePrincipalConfigurationsResourcePrincipalConfigurations</a>

---



